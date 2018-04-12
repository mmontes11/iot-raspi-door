import { Gpio } from 'onoff';
import _ from "underscore";

export class DoorSensor {
    constructor(gpio, pollInterval) {
        this.gpio = new Gpio(gpio, "in");
        this.pollInterval = pollInterval;
        this.lastGpioValue = undefined;
    }
    onChanged(cb) {
        setInterval(() => {
            const gpioValue = this.gpio.readSync();
            if (this.lastGpioValue === undefined || this.lastGpioValue !== gpioValue) {
                cb(DoorSensor._isOpened(gpioValue));
            }
            this.lastGpioValue = gpioValue;
        }, this.pollInterval);
    }
    static _isOpened(gpioValue) {
        return gpioValue === 1;
    }
}