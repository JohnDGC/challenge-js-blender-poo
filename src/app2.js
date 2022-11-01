class Blender {
  brand;
  power = false;
  speeds = [];
  currentSpeed = 0;

  constructor(brand, speeds) {
    this.brand = brand;
    this.speeds = speeds;
  }

  showBrand() {
    return this.brand;
  }

  powerOn() {
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
    this.currentSpeed = speed;
    return speed;
  }

  checkSpeeds() {
    if (!this.currentSpeed) {
      return (this.currentSpeed = 0);
    } else return this.currentSpeed;
  }
}

module.exports = Blender;
