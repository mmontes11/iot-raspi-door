import Yeelight from "node-yeelight";
import log from "../utils/log"

export class YeelightHandler {
    constructor(deviceId, brightnessPercentage, transitionSpeedInMs) {
        this.deviceId = deviceId;
        this.brightnessPercentage = brightnessPercentage;
        this.transitionSpeedInMs = transitionSpeedInMs;
        this.device = undefined;
        this.y = new Yeelight;
    }
    listen() {
        this.y.on('ready', () => {
            this.y.discover();
        });
        this.y.on('deviceadded', (device) => {
            YeelightHandler._log(`Found device ${device.id}`);
            if (device.id === this.deviceId) {
                this.y.connect(device);
            }
        });
        this.y.on('deviceconnected', (device) => {
            this.device = device;
            YeelightHandler._log(`Device ${this.device.id} connected`);
        });
        this.y.listen();
    }
    turnOn() {
        this.y.setPower(this.device, true, this.transitionSpeedInMs);
        this.y.setBrightness(this.device, this.brightnessPercentage, this.transitionSpeedInMs);
        YeelightHandler._log(`on`);
    }
    turnOff() {
        this.y.setPower(this.device, false, this.transitionSpeedInMs);
        YeelightHandler._log(`off`);
    }
    static _log(message) {
        log.logInfo(`Yeelight: ${message}`);
    }
}

