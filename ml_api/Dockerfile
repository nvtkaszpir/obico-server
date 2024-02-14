ARG BASE_TAG="1.3"
FROM thespaghettidetective/ml_api_base:${BASE_TAG}
LABEL base-tag="${BASE_TAG}"

# Add opencv2 dependencies
# hadolint ignore=DL3008
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libgl1 \
        libglib2.0-0 \
    && pip install --upgrade --no-cache-dir pip==23.3.2 \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

WORKDIR /app
COPY . /app

# will have to test with gpu some day
RUN groupadd -g 1005 vglusers && \
    useradd -ms /bin/bash app -u 1000 -g 1005 && \
    usermod -a -G video app && \
    chown -R app:vglusers /app
USER app
EXPOSE 3333

# fetch each model as separate layer, improces layer reuse
RUN echo 'Downloading the latest failure detection AI model in Darknet format...' \
    && wget --progress=dot:giga -O model/model-weights.darknet -i model/model-weights.darknet.url
RUN echo 'Downloading the latest failure detection AI model in ONNX format...' \
    && wget --progress=dot:giga -O model/model-weights.onnx -i model/model-weights.onnx.url

ENV PYTHONDONTWRITEBYTECODE=1
# check if we can load app, if any python import fails then it will fail image build
ENV DARKNET_PATH=/darknet
RUN gunicorn --bind 0.0.0.0:3333 --workers 1 wsgi --check-config --preload -e DARKNET_PATH=/darknet

ARG GIT_SOURCE
ARG GIT_COMMIT
LABEL org.opencontainers.image.source="${GIT_SOURCE}"
LABEL org.opencontainers.image.revision="${GIT_COMMIT}"
