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
    this.power = true;
  }

  powerOff() {
    this.power = false;
    this.currentSpeed = 0;
  }

  isPowerOn() {
    return this.power;
  }

  liquefy(speed) {
    if (!this.power)
      throw "Error: Está apagada";

    this.checkSpeeds(speed);
  }

  checkSpeeds(speed) {
    if (!this.speeds.find(verify => verify === speed))
      throw 'Error: Velocidad no disponible';
    
    this.currentSpeed = speed;
  }
}

module.exports = Blender;
