import { Gpio } from "onoff";
import { Component } from "./component";

export class LED extends Component {
    constructor(gpioPin) {
        super(new Gpio(gpioPin, "out"));
    }
    turnOn() {
        this.gpioPin.writeSync(1);
    }
    turnOff() {
        this.gpioPin.writeSync(0);
    }
}