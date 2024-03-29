
# About

Obico ML API - the core of the detecting spaghetti.

# Pass rectangle regions to ignore

You can pass `ignore` param to ignore detections that happen in given regions.
This helps to avoid false positives due to image containing for example timestamp.

Each entry in the list is a list of the region to exclude

`ignore` param in  URL should be urlencoded json list, for example

```json
[[320, 32, 640, 64],[210, 600, 420, 1200],[1500, 600, 200, 1200],[1500, 600, 198, 1200]]
```

should be passed as

```text
%5B%5B320%2C%2032%2C%20640%2C%2064%5D%2C%5B210%2C%20600%2C%20420%2C%201200%5D%2C%5B1500%2C%20600%2C%20200%2C%201200%5D%2C%5B1500%2C%20600%2C%20198%2C%201200%5D%5D
```

You can use [onlinejstools](https://onlinejsontools.com/url-encode-json)

to generate it.

See below example how to use it

## do not ignore anything, original

```shell
curl "http://0.0.0.0:3333/p/?img=https://bagno.hlds.pl/obico/bad_1.jpg"
{"detections":[["failure",0.5,[759.0,968.0,117.0,121.0]],["failure",0.468,[1014.0,963.0,132.0,144.0]],["failure",0.332,[1024.0,1063.0,130.0,147.0]],["failure",0.257,[939.0,966.0,137.0,124.0]],["failure",0.218,[927.0,1063.0,170.0,146.0]],["failure",0.199,[794.0,1053.0,121.0,116.0]],["failure",0.149,[800.0,1141.0,144.0,70.0]]]}
```

## ignore top left corner where are timestamps

```shell
curl "http://0.0.0.0:3333/p/?img=https://bagno.hlds.pl/obico/bad_1.jpg&ignore=%5B%5B320%2C%2032%2C%20640%2C%2064%5D%5D"
{"detections":[["failure",0.5,[759.0,968.0,117.0,121.0]],["failure",0.468,[1014.0,963.0,132.0,144.0]],["failure",0.332,[1024.0,1063.0,130.0,147.0]],["failure",0.257,[939.0,966.0,137.0,124.0]],["failure",0.218,[927.0,1063.0,170.0,146.0]],["failure",0.199,[794.0,1053.0,121.0,116.0]],["failure",0.149,[800.0,1141.0,144.0,70.0]]]}
```

## ignore left half of the image

```shell
curl "http://0.0.0.0:3333/p/?img=https://bagno.hlds.pl/obico/bad_1.jpg&ignore=%5B%5B400%2C%20609%2C%20800%2C%201200%5D%5D"
{"detections":[["failure",0.468,[1014.0,963.0,132.0,144.0]],["failure",0.332,[1024.0,1063.0,130.0,147.0]],["failure",0.257,[939.0,966.0,137.0,124.0]],["failure",0.218,[927.0,1063.0,170.0,146.0]],["failure",0.149,[800.0,1141.0,144.0,70.0]]]}
```

#mark whole image as area where detections should be ignored
```shell
curl "http://0.0.0.0:3333/p/?img=https://bagno.hlds.pl/obico/bad_1.jpg&ignore=%5B%5B800%2C%20609%2C%201600%2C%201200%5D%5D"
{"detections":[]}
```

# TODO

- when running detect.py on video do not overwrite detections.json, but make it jsonl?
    python3 detect.py /smb/bagno/kaszpir/src/node-red/data/prusa/with_gcode/2024-03-27_2/2024-03-27_2.mp4 --save-detections-to detections.json --render-to ./2024-03-27_2_rendered.mp4
