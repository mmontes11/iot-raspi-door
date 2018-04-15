export default {
    env: process.env.NODE_ENV,
    longitude: process.env.RASPI_LONGITUDE,
    latitude: process.env.RASPI_LATITUDE,
    topic: process.env.RASPI_TOPIC,
    doorSensorGpio: process.env.DOOR_SENSOR_GPIO,
    doorSensorPollInterval: process.env.DOOR_SENSOR_POLL_INTERVAL,
    ldrGpio: process.env.LDR_GPIO,
    ldrDarkRcTimeThreeshold: process.env.LDR_DARK_RC_TIME_THREESHOLD,
    ldrRcTimeMaxValue: process.env.LDR_RC_TIME_MAX_VALUE,
    ledOpenedGpio: process.env.LED_OPENED_GPIO,
    ledClosedGpio: process.env.LED_CLOSED_GPIO,
    ledRequestSuccessGpio: process.env.LED_REQUEST_SUCCESS_GPIO,
    ledRequestErrorGpio: process.env.LED_REQUEST_ERROR_GPIO,
    ledBlinkDurationInMs: process.env.LED_BLINK_DURATION_IN_MS,
    ledBlinkTotalPeriodInMs: process.env.LED_BLINK_TOTAL_IN_MS,
    serverUrl: process.env.IOT_SERVER_URL,
    basicAuthUsername: process.env.IOT_SERVER_BASIC_AUTH_USERNAME,
    basicAuthPassword: process.env.IOT_SERVER_BASIC_AUTH_PASSWORD,
    username: process.env.IOT_SERVER_USERNAME,
    password: process.env.IOT_SERVER_PASSWORD,
    debug: process.env.IOT_DEBUG
};