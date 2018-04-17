export default {
    env: 'development',
    longitude: -8.40,
    latitude: 43.40,
    topic: 'home/raspi/door',
    doorSensorGpio: 4,
    doorSensorPollInterval: 1000,
    ldrGpio: 17,
    ldrDarkRcTimeThreeshold: 20000,
    ldrRcTimeMaxValue: 5000000,
    ledOpenedGpio: 19,
    ledClosedGpio: 26,
    ledRequestSuccessGpio: 20,
    ledRequestErrorGpio: 21,
    ledBlinkDurationInMs: 100,
    ledBlinkTotalPeriodInMs: 2000,
    yeelightDeviceId: "0x00000000049e4ae4",
    yeelightBrightnessPercentage: 100,
    yeelightTransitionSpeedInMs: 300,
    serverUrl: 'http://192.168.0.100:9000',
    basicAuthUsername: 'admin',
    basicAuthPassword: 'admin',
    username: 'admin',
    password: 'aA12345678&',
    debug: true,
    debugRequests: false
};