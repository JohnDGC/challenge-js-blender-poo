let scanf = require('scanf');

class Blender {

  brand;
  power = false;
  speeds;

  constructor( brand ) {
    this.brand = brand;
  }

  showBrand() {
    return this.brand;
  }

  powerOn() {
    if (this.power) {
      return false;
    }
    this.liquefy();
    return this.power = true;
  }
  powerOff() {
    return this.power = false;
  }

  isPowerOn() {
    return this.power;
  }

  liquefy(speed) {
    this.speeds = speed;
    return speed;
  }

  checkSpeeds() {
    if (this.speeds === undefined) {
      return this.speeds = 0;
    } else return this.speeds;
  }
}

module.exports = Blender;