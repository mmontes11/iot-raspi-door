import log from './utils/log';
import onoff from 'onoff';

const gpio = new onoff.Gpio(4, "in", "rising", {debounceTimeout: 10});

gpio.watch((err, value) => {
	if (err) {
		throw err;
	} else {
		log.logInfo(value)
	}
});;
