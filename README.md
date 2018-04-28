# iot-raspi-door

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi used to detect door opening and turn on the light if needed. 
For storing event data, it consumes [IoT server](https://github.com/mmontes11/iot-server) REST API via [IoT client](https://github.com/mmontes11/iot-client).


### Components

* [Door Magnetic Sensor](https://www.adafruit.com/product/375)
* [LDR](https://www.adafruit.com/product/161)
* 0.1uF Capacitor
* 4 x 220Ω Resistor
* 4 x LED

### Wiring

![wiring](https://raw.githubusercontent.com/mmontes11/iot-raspi-door/develop/wiring/wiring.png)

### Development

```bash
$ npm start
```

### Lint

```bash
$ npm run lint
```

### Build Image

```bash
$ npm run build
$ docker build -t iot-raspi-door .
```

### DockerHub

Image available on [Docker Hub](https://hub.docker.com/r/mmontes11/iot-raspi-door/)


### Production

Configuration:

* [.env](https://github.com/mmontes11/iot-raspi-door/blob/develop/.env)


```bash
$ ./run-production.sh
```
