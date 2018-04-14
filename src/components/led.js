import { Gpio } from "onoff";
import { Component } from "./component";

export class LED extends Component {
    constructor(gpioPin, blinkDurationInMs, blinkTotalPeriodInMs) {
        super(new Gpio(gpioPin, "out"));
        this.blinkDurationInMs = blinkDurationInMs;
        this.blinkTotalPeriodInMs = blinkTotalPeriodInMs;
    }
    turnOn() {
        this.gpio.writeSync(1);
    }
    turnOff() {
        this.gpio.writeSync(0);
    }
    blink() {
        const interval = setInterval(() => {
            this.gpio.writeSync(this.gpio.readSync() === 0 ? 1 : 0)
        }, this.blinkDurationInMs);
        setTimeout(() => {
            clearInterval(interval);
            this.gpio.writeSync(0);
        }, this.blinkTotalPeriodInMs);
    }
}