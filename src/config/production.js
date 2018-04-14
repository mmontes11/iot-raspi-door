export default {
    env: process.env.NODE_ENV,
    doorSensorGpio: process.env.DOOR_SENSOR_GPIO,
    doorSensorPollInterval: process.env.DOOR_SENSOR_POLL_INTERVAL,
    ldrGpio: process.env.LDR_GPIO,
    ldrDarkRcTimeThreeshold: process.env.LDR_DARK_RC_TIME_THREESHOLD,
    ledOpenedGpio: process.env.LED_OPENED_GPIO,
    ledClosedGpio: process.env.LED_CLOSED_GPIO,
    debug: process.env.IOT_DEBUG
};