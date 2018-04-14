import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import { LDR } from "./components/ldr";
import { LED } from "./components/led";
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorSensorPollInterval);
const ldr = new LDR(config.ldrGpio, config.ldrDarkRcTimeThreeshold);
const ledOpened = new LED(config.ledOpenedGpio);
const ledClosed = new LED(config.ledClosedGpio);

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
		ledOpened.turnOn();
		ledClosed.turnOff();
        //TODO: Send door-opened event
	} else {
		ledOpened.turnOff();
		ledClosed.turnOn();
        //TODO: Send door-closed event
    }
});

process.on('SIGINT', () => {
	doorSensor.unexport();
	ledOpened.unexport();
	ledClosed.unexport();
	process.exit();
});