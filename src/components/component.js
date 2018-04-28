export class Component {
  constructor(gpio) {
    this.gpio = gpio;
  }
  unexport() {
    this.gpio.unexport();
  }
}
