import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import { LDR } from "./components/ldr";
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorSensorPollInterval);
const ldr = new LDR(config.ldrGpio, config.ldrDarkRcTimeThreeshold);

doorSensor.onChanged((isOpened) => {
	log.logInfo(`Door sensor: ${isOpened ? "opened" : "closed"}`);
	log.logInfo(`LDR: ${ldr.isDark() ? "dark" : "light"}`);
});

process.on('SIGINT', () => {
	doorSensor.gpio.unexport();
	process.exit();
});