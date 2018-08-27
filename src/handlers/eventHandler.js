export class EventHandler {
  constructor(iotClient, doorOpenedEventType, doorClosedEventType, luminosityEventType, thing, onSuccess, onError) {
    this.iotClient = iotClient;
    this.doorOpenedEventType = doorOpenedEventType;
    this.doorClosedEventType = doorClosedEventType;
    this.luminosityEventType = luminosityEventType;
    this.thing = thing;
    this.onSuccess = onSuccess;
    this.onError = onError;
  }
  sendDoorOpenedEvent() {
    const request = () =>
      this.iotClient.eventService.create({
        event: {
          type: this.doorOpenedEventType,
        },
        thing: this.thing,
      });
    return this._sendRequest(request);
  }
  sendDoorClosedEvent() {
    const request = () =>
      this.iotClient.eventService.create({
        event: {
          type: this.doorClosedEventType,
        },
        thing: this.thing,
      });
    return this._sendRequest(request);
  }
  sendLuminositydEvent(isDark) {
    const request = () =>
      this.iotClient.eventService.create({
        event: {
          type: this.luminosityEventType,
          value: !isDark,
        },
        thing: this.thing,
      });
    return this._sendRequest(request);
  }
  async _sendRequest(request) {
    try {
      await request();
      this.onSuccess();
    } catch (err) {
      this.onError();
    }
  }
}
