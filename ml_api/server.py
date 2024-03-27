#!/usr/bin/env python

import flask
from flask import abort, make_response, request, jsonify
from os import path, environ
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration
import cv2
import numpy as np
import requests
from statsd.defaults.env import statsd

from auth import token_required
from lib.detection_model import load_net, detect

# connection timeouts for python.requests for connect/read, bump it for slow endpoints
# especially if using esp32 cameras directly
TIMEOUT_CONNECT = float(environ.get("TIMEOUT_CONNECT", "0.1"))
TIMEOUT_READ = float(environ.get("TIMEOUT_READ", "5"))
# The threshold for a box to be considered a positive detection
THRESH = float(environ.get("THRESH", "0.08"))
SESSION_TTL_SECONDS = float(environ.get("SESSION_TTL_SECONDS", 60 * 2))
FLOAT_PRECISION = int(environ.get("FLOAT_PRECISION", 3))
app = flask.Flask(__name__)

# Sentry
if environ.get("SENTRY_DSN"):
    app.logger.info(f"SENTRY_DSN=***masked***")
    sentry_sdk.init(
        dsn=environ.get("SENTRY_DSN"),
        integrations=[
            FlaskIntegration(),
        ],
    )

status = dict()

# SECURITY WARNING: don't run with debug turned on in production!
app.config["DEBUG"] = environ.get("DEBUG") == "True"

app.logger.info(f"DEBUG={app.config['DEBUG']}")
app.logger.info(f"FLOAT_PRECISION={FLOAT_PRECISION}")
app.logger.info(f"SESSION_TTL_SECONDS={SESSION_TTL_SECONDS}")
app.logger.info(f"THRESH={THRESH}")
app.logger.info(f"TIMEOUT_CONNECT={TIMEOUT_CONNECT}")
app.logger.info(f"TIMEOUT_READ={TIMEOUT_READ}")

STATSD_HOST = environ.get("STATSD_HOST", "127.0.0.1")
STATSD_PORT = environ.get("STATSD_PORT", "8125")
STATSD_PREFIX = environ.get("STATSD_PREFIX", 'obico.ml_api')
STATSD_MAXUDPSIZE = environ.get("STATSD_MAXUDPSIZE")
STATSD_IPV6 = environ.get("STATSD_IPV6", "0")

app.logger.info(f"STATSD_HOST={STATSD_HOST}")
app.logger.info(f"STATSD_PORT={STATSD_PORT}")
app.logger.info(f"STATSD_PREFIX={STATSD_PREFIX}")
app.logger.info(f"STATSD_MAXUDPSIZE={STATSD_MAXUDPSIZE}")
app.logger.info(f"STATSD_IPV6={STATSD_IPV6}")

# load ai/ml models
model_dir = path.join(path.dirname(path.realpath(__file__)), "model")
net_main = load_net(
    path.join(model_dir, "model.cfg"), path.join(model_dir, "model.meta")
)


def set_precision(detections, precision=4, box_precision=0):
    """set float precision and trim detection boxes dimensions to integers"""
    new_detections = []
    for detection in detections:
        text = detection[0]
        confidence = round(detection[1], precision)
        box = detection[2]
        coords = (
            round(box[0], box_precision),
            round(box[1], box_precision),
            round(box[2], box_precision),
            round(box[3], box_precision),
        )
        new_detection = (text, confidence, coords)
        new_detections.append(new_detection)

    return new_detections


def send_statsd(detections, exception=0):
    """send statsd metric for each detection"""
    max_confidence = 0
    sum_confidence = 0
    avg_confidence = 0
    with statsd.pipeline() as pipe:
        for detection in detections:
            confidence = detection[1]
            # coords = detection[2]
            sum_confidence += confidence
            if confidence > max_confidence:
                max_confidence = confidence
        if len(detections):
            avg_confidence = sum_confidence / len(detections)
        
    statsd.gauge('confidence.max', max_confidence)
    statsd.gauge('confidence.avg', avg_confidence)
    statsd.gauge('detections', len(detections))
    statsd.gauge('exception', exception)
    
# process detection of the image, pass 'img' as param
@app.route("/p/", methods=["GET"])
@token_required
def get_p():
    if "img" in request.args:
        try:
            resp = requests.get(
                request.args["img"],
                stream=True,
                timeout=(TIMEOUT_CONNECT, TIMEOUT_READ),
            )
            resp.raise_for_status()
            img_array = np.array(bytearray(resp.content), dtype=np.uint8)
            img = cv2.imdecode(img_array, -1)
            detections = detect(net_main, img, thresh=THRESH)
            detections = set_precision(detections, FLOAT_PRECISION)
            send_statsd(detections, 0)
            return jsonify({"detections": detections})
        except Exception as err:
            send_statsd([], 1)
            sentry_sdk.capture_exception()
            app.logger.error(f"Failed to get image {request.args} - {err}")
            abort(
                make_response(
                    jsonify(
                        detections=[],
                        message=f"Failed to get image {request.args} - {err}",
                    ),
                    503,
                )
            )

    else:
        app.logger.warn(f"Invalid request params: {request.args}")
        abort(
            make_response(
                jsonify(
                    detections=[], message=f"Invalid request params: {request.args}"
                ),
                400,
            )
        )


# healtchcheck and readiness endpoint
@app.route("/hc/", methods=["GET"])
def health_check():
    return "ok" if net_main is not None else "error"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3333, threaded=False)
