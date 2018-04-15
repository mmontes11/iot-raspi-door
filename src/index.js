import log from './utils/log';
import { DoorSensor } from "./components/doorSensor";
import { LDR } from "./components/ldr";
import { LED } from "./components/led";
import { Thing } from './models/thing';
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorSensorPollInterval);
const ldr = new LDR(config.ldrGpio, config.ldrDarkRcTimeThreeshold, config.ldrRcTimeMaxValue);
const ledOpened = new LED(config.ledOpenedGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const ledClosed = new LED(config.ledClosedGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const ledRequestSuccess = new LED(config.ledRequestSuccessGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const ledRequestError = new LED(config.ledRequestErrorGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const componentsToUnexport = [
    doorSensor,
    ledOpened,
    ledClosed,
    ledRequestSuccess,
    ledRequestError
];

doorSensor.onChange((isOpened) => {
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
        ledRequestSuccess.blink();
    } else {
        ledOpened.turnOff();
        ledClosed.turnOn();
        //TODO: Send door-closed event
        ledRequestError.blink();
    }
});

process.on('SIGINT', () => {
    componentsToUnexport.forEach((component) => component.unexport());
    process.exit();
});