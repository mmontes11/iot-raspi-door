import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorPollInterval);

doorSensor.onChanged((isOpened) => {
	log.logInfo(`Door ${isOpened ? "opened" : "closed"}`);
});

process.on('SIGINT', function () {
	doorSensor.unexport();
});