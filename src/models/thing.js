import os from "os";
import config from "../config/index";

export class Thing {
  constructor(geometry, ...supportedObservationTypes) {
    this.topic = config.topic;
    this.geometry = geometry;
    this.name = os.hostname();
    this.supportedObservationTypes = supportedObservationTypes;
  }
  toJSON() {
    return {
      name: this.name,
      geometry: this.geometry,
      topic: this.topic,
      supportedObservationTypes: this.supportedObservationTypes,
    };
  }
}
