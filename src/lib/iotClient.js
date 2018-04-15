import IoTClient from "@mmontes11/iot-client";
import config from '../config/index';

const iotClient = new IoTClient({
    url: config.serverUrl,
    basicAuthUsername: config.basicAuthUsername,
    basicAuthPassword: config.basicAuthPassword,
    username: config.username,
    password: config.password
});

export default iotClient;