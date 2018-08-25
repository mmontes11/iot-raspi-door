export class LuminosityHandler {
  constructor(ldr, pollInterval) {
    this.ldr = ldr;
    this.pollInterval = pollInterval;
    this.lastIsDarkValue = null;
  }
  onChange(cb) {
    setInterval(() => {
      const isDark = this.ldr.isDark();
      if (this.lastIsDarkValue === null || this.lastIsDarkValue !== isDark) {
        cb(isDark);
      }
      this.lastIsDarkValue = isDark;
    }, this.pollInterval);
  }
}
