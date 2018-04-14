import { Gpio } from  "onoff";
import sleep from "sleep";
import log from '../utils/log';

export class LDR {
    constructor(gpio, darkRcTimeThreeshold) {
        this.gpio = gpio;
        this.darkRcTimeThreeshold = darkRcTimeThreeshold;
    }
    isDark() {
        const rcTime = this._rcTime();
        log.logInfo(`LDR RC time: ${rcTime}`);
        return rcTime >= this.darkRcTimeThreeshold;
    }
    _rcTime (){
        let count = 0;
        let gpio = new Gpio(this.gpio, "out");
        gpio.writeSync(0);
        sleep.usleep(100000);
        gpio = new Gpio(this.gpio, "in", "both");
        while (gpio.readSync() === 0) {
            count++;
        }
        gpio.unexport();
        return count;
    }
}