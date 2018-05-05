import os from "os";
import config from "../config/index";

export class Thing {
  constructor(geometry, ...supportedEventTypes) {
    this.topic = config.topic;
    this.geometry = geometry;
    this.name = os.hostname();
    this.supportedEventTypes = supportedEventTypes;
  }
  toJSON() {
    return {
      name: this.name,
      geometry: this.geometry,
      topic: this.topic,
      supportedObservationTypes: {
        measurement: [],
        event: this.supportedEventTypes,
      },
    };
  }
}
