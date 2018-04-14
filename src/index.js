import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import { LDR } from "./components/ldr";
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorSensorPollInterval);
const ldr = new LDR(config.ldrGpio, config.ldrDarkRcTimeThreeshold);

doorSensor.onChanged((isOpened) => {
	log.logInfo(`Door sensor: ${isOpened ? "opened" : "closed"}`);
	const isDark = ldr.isDark();
	log.logInfo(`LDR: ${isDark ? "dark" : "light"}`);

	if (isOpened && isDark) {
		//TODO: Turn the light bulb on
        log.logInfo(`Light bulb: on`);
    } else {
        //TODO: Turn the light bulb off
        log.logInfo(`Light bulb: off`);
    }
    if (isOpened) {
		//TODO: Turn opened LED on
        //TODO: Turn closed LED off
        //TODO: Send door-opened event
	} else {
        //TODO: Turn opened LED off
        //TODO: Turn closed LED on
        //TODO: Send door-closed event
    }
});

process.on('SIGINT', () => {
	doorSensor.gpio.unexport();
	process.exit();
});