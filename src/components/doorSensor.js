import { Gpio } from "onoff";
import { Component } from "./component";

export class DoorSensor extends Component {
  constructor(gpioPin, pollInterval) {
    super(new Gpio(gpioPin, "in"));
    this.pollInterval = pollInterval;
    this.lastGpioValue = null;
  }
  onChange(cb) {
    setInterval(() => {
      const gpioValue = this.gpio.readSync();
      if (this.lastGpioValue === null || this.lastGpioValue !== gpioValue) {
        cb(DoorSensor._isOpened(gpioValue));
      }
      this.lastGpioValue = gpioValue;
    }, this.pollInterval);
  }
  static isOpened() {
    const gpioValue = this.gpio.readSync();
    return DoorSensor._isOpened(gpioValue);
  }
  static _isOpened(gpioValue) {
    return gpioValue === 1;
  }
}
