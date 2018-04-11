import log from './utils/log';
import onoff from 'onoff';

const gpio = new onoff.Gpio(4, "in");

setInterval(() => {
	log.logInfo(gpio.readSync());
}, 100);