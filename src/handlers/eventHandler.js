export class EventHandler {
  constructor(iotClient, doorOpenedEventType, doorClosedEventType, luminosityChangedEventType, thing) {
    this.iotClient = iotClient;
    this.doorOpenedEventType = doorOpenedEventType;
    this.doorClosedEventType = doorClosedEventType;
    this.luminosityChangedEventType = luminosityChangedEventType;
    this.thing = thing;
  }
  sendDoorOpenedEvent() {
    return this.iotClient.eventService.create({
      event: {
        type: this.doorOpenedEventType,
      },
      thing: this.thing,
    });
  }
  sendDoorClosedEvent() {
    return this.iotClient.eventService.create({
      event: {
        type: this.doorClosedEventType,
      },
      thing: this.thing,
    });
  }
  sendLuminosityChangedEvent(isDark) {
    return this.iotClient.eventService.create({
      event: {
        type: this.luminosityChangedEventType,
        isDark,
      },
      thing: this.thing,
    });
  }
}
