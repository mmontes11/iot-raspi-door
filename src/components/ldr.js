import { Gpio } from  "onoff";
import sleep from "sleep";
import log from '../utils/log';

export class LDR {
    constructor(gpioPin, darkRcTimeThreeshold, rcTimeMaxValue) {
        this.gpioPin = gpioPin;
        this.darkRcTimeThreeshold = darkRcTimeThreeshold;
        this.rcTimeMaxValue = rcTimeMaxValue;
    }
    isDark() {
        const rcTime = this._rcTime();
        log.logInfo(`LDR RC time: ${rcTime}`);
        return rcTime >= this.darkRcTimeThreeshold;
    }
    _rcTime (){
        let time = 0;
        let gpio = new Gpio(this.gpioPin, "out");
        gpio.writeSync(0);
        sleep.usleep(100000);
        gpio = new Gpio(this.gpioPin, "in", "both");
        while (gpio.readSync() === 0 && time < this.rcTimeMaxValue) {
            time++;
        }
        gpio.unexport();
        return time;
    }
}