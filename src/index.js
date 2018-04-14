import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import config from "./config/index";
import { Gpio } from  "onoff";
import sleep from "sleep";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorPollInterval);

doorSensor.onChanged((isOpened) => {
	log.logInfo(`Door ${isOpened ? "opened" : "closed"}`);
});

const rcTime = (pin) => {
	let count = 0;
	let ldr = new Gpio(pin, "out");
	ldr.writeSync(0);
    sleep.usleep(100000);
    ldr = new Gpio(pin, "in", "both");
	while (ldr.readSync() === 0) {
		count++;
	}
	ldr.unexport();
	return count;
};

log.logInfo(rcTime(17));

process.on('SIGINT', () => {
	doorSensor.gpio.unexport();
	process.exit();
});