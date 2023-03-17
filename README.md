# iot-raspi-door

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi that handles door opening and luminosity. 
For storing event data, it consumes [IoT server](https://github.com/mmontes11/iot-server) REST API via [IoT client](https://github.com/mmontes11/iot-client).

### Features

* Detect door opening and turn on the light if it's dark.
* Detect door closing and and turn off the light.
* Poll luminosity and turn of the light if it's dark and the door is opened.
* Create events in [IoT server](https://github.com/mmontes11/iot-server) via via [IoT client](https://github.com/mmontes11/iot-client).  

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
* Create a `.env` file with this [variables](https://github.com/mmontes11/iot-raspi-door/blob/develop/src/config/production.js)

```bash
$ ./run-production.sh
```
