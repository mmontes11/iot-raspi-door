import { Gpio } from "onoff";

export class LED {
    constructor(gpio) {
        this.gpio = new Gpio(gpio, "out");
    }
    turnOn() {
        this.gpio.writeSync(1);
    }
    turnOff() {
        this.gpio.writeSync(0);
    }
}