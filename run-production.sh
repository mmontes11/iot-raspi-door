#!/usr/bin/env bash

docker run --name iot-raspi-door --privileged --network host --restart always --env-file .env -h $(hostname) -d mmontes11/iot-raspi-door