export class Component {
    constructor(gpio) {
        this.gpioPin = gpio;
    }
    unexport() {
        this.gpioPin.unexport();
    }
}