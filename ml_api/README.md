
# About

Obico ML API - the core of the detecting spaghetti.

# Pass rectangle regions to ignore

You can pass `ignore` param to ignore detections that happen in given regions.
This helps to avoid false positives due to image containing for example timestamp.

Each entry in the list is a list of the region to exclude

`ignore` param in  URL should be urlencoded json list, for example

```json
[
    [320, 32, 640, 64],
    [210, 600, 420, 1200],
    [1500, 600, 200, 1200]
]
```

then minify it:

```json
[[320,32,640,64],[210,600,420,1200],[1500,600,200,1200]]
```

should be converted as urlencoded string:

```text
%5B%5B320%2C32%2C640%2C64%5D%2C%5B210%2C600%2C420%2C1200%5D%2C%5B1500%2C600%2C200%2C1200%5D%5D
```

... and this can be pushed to API URL as ignore param:

```text
&ignore=%5B%5B320%2C32%2C640%2C64%5D%2C%5B210%2C600%2C420%2C1200%5D%2C%5B1500%2C600%2C200%2C1200%5D%5D
```

You can use [onlinejstools](https://onlinejsontools.com/url-encode-json)
to generate it.

See below examples at the very end how to use it.

## do not ignore anything

Compatible with original Obico API.

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

## mark whole image as area where detections should be ignored

```shell
curl "http://0.0.0.0:3333/p/?img=https://bagno.hlds.pl/obico/bad_1.jpg&ignore=%5B%5B800%2C%20609%2C%201600%2C%201200%5D%5D"
{"detections":[]}
```

## my custom ignore areas

Below example shows that obico likes to trigger on the power cable on the top left corner and the timestamp.
So I defined ignore regions as below

```text
http://bagno.hlds.pl/obico/0461c8.jpg

ignore=[[320,+32,+640,+64],[210,+600,+420,+1200],[1500,+600,+200,+1200]]
```

```shell
curl "http://0.0.0.0:3333/p/?img=http%3A%2F%2Fbagno.hlds.pl%2Fobico%2F0461c8.jpg&ignore=%5B%5B320%2C+32%2C+640%2C+64%5D%2C%5B210%2C+600%2C+420%2C+1200%5D%2C%5B1500%2C+600%2C+200%2C+1200%5D%5D"
{"detections":[],"ignored":[["failure",0.365,[441.0,34.0,165.0,79.0]],["failure",0.289,[182.0,125.0,117.0,85.0]],["failure",0.251,[547.0,25.0,169.0,70.0]],["failure",0.239,[188.0,60.0,195.0,56.0]],["failure",0.147,[305.0,53.0,161.0,51.0]]]
```

result

```json
{
    "detections":[],
    "ignored":[
        ["failure",0.365,[441.0,34.0,165.0,79.0]],
        ["failure",0.289,[182.0,125.0,117.0,85.0]],
        ["failure",0.251,[547.0,25.0,169.0,70.0]],
        ["failure",0.239,[188.0,60.0,195.0,56.0]],
        ["failure",0.147,[305.0,53.0,161.0,51.0]]
    ]
}
```
