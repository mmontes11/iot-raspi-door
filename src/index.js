import log from './utils/log';
import onoff from 'onoff';

const gpio = new onoff.Gpio(14, "in", "both");

gpio.watch((err, value) => {
    if (err) {
        throw err;
    } else {
        log.logInfo(value)
    }
});;