import log from "./utils/log";
import { DoorSensor } from "./components/doorSensor";
import { LDR } from "./components/ldr";
import { LED } from "./components/led";
import { Thing } from "./models/thing";
import { YeelightHandler } from "./handlers/yeelightHandler";
import { LuminosityHandler } from "./handlers/luminosityHandler";
import { LocationHandler } from "./handlers/locationHandler";
import { EventHandler } from "./handlers/eventHandler";
import iotClient from "./lib/iotClient";
import constants from "./utils/constants";
import config from "./config/index";

const doorSensor = new DoorSensor(config.doorSensorGpio, config.doorSensorPollInterval);
const ldr = new LDR(config.ldrGpio, config.ldrDarkRcTimeThreeshold, config.ldrRcTimeMaxValue);
const ledOpened = new LED(config.ledOpenedGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const ledClosed = new LED(config.ledClosedGpio, config.ledBlinkDurationInMs, config.ledBlinkTotalPeriodInMs);
const ledRequestSuccess = new LED(
  config.ledRequestSuccessGpio,
  config.ledBlinkDurationInMs,
  config.ledBlinkTotalPeriodInMs,
);
const ledRequestError = new LED(
  config.ledRequestErrorGpio,
  config.ledBlinkDurationInMs,
  config.ledBlinkTotalPeriodInMs,
);
const componentsToUnexport = [doorSensor, ledOpened, ledClosed, ledRequestSuccess, ledRequestError];
const thing = new Thing(
  LocationHandler.getCurrentLocation(),
  constants.doorOpenedEventType,
  constants.doorClosedEventType,
  constants.luminosityEventType,
);
const yeelightHandler = new YeelightHandler(
  config.yeelightDeviceId,
  config.yeelightBrightnessPercentage,
  config.transitionSpeedInMs,
);
const luminosityHandler = new LuminosityHandler(ldr, config.luminosityPollInterval);
const eventHandler = new EventHandler(
  iotClient,
  constants.doorOpenedEventType,
  constants.doorClosedEventType,
  constants.luminosityEventType,
  thing.toJSON(),
  () => ledRequestSuccess.blink(),
  () => ledRequestError.blink(),
);

yeelightHandler.listen();

doorSensor.onChange(async isOpened => {
  log.logInfo(`Door sensor: ${isOpened ? "opened" : "closed"}`);
  const isDark = ldr.isDark();
  log.logInfo(`LDR: ${isDark ? "dark" : "light"}`);
  if (isOpened && isDark) {
    yeelightHandler.turnOn();
  } else {
    yeelightHandler.turnOff();
  }
  if (isOpened) {
    ledOpened.turnOn();
    ledClosed.turnOff();
    await eventHandler.sendDoorOpenedEvent();
  } else {
    ledOpened.turnOff();
    ledClosed.turnOn();
    await eventHandler.sendDoorClosedEvent();
  }
});

luminosityHandler.onChange(async isDark => {
  log.logInfo(`Luminosity: ${isDark ? "dark" : "light"}`);
  await eventHandler.sendLuminositydEvent(isDark);
  if (DoorSensor.isOpened()) {
    if (isDark) {
      yeelightHandler.turnOn();
    } else {
      yeelightHandler.turnOff();
    }
  }
});

process.on("SIGINT", () => {
  componentsToUnexport.forEach(component => component.unexport());
  process.exit();
});
