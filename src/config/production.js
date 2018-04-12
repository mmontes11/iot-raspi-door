export default {
    env: process.env.NODE_ENV,
    doorSensorGpio: process.env.DOOR_SENSOR_GPIO,
    doorPollInterval: process.env.DOOR_POLL_INTERVAL,
    debug: process.env.IOT_DEBUG
};