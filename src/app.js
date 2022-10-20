class Blender {
  constructor({ brand,
    power = false,
    currentSpeed = 0,
    speeds = []
  }) {
    this.brand = brand;
    this.power = power;
    this.currentSpeed = currentSpeed;
    this.speeds = speeds;
  }

  powerOn(on) {
    if (on == "on") {
      this.power = true;
      let speed = prompt(`Insert speed between 1-${this.speeds.length - 1}`);
      if (speed == this.speeds.find((speedPrompt) => speedPrompt == speed)) {
        this.currentSpeed = speed;
        console.log("Turned on");
        this.liquefy();
      } else {
        console.log("Insert a valid speed");
        return;
      }
    } else {
      console.log(`It's turned off`);
    }
  }

  liquefy() {
    if (this.currentSpeed > 0) {
      console.log(`Blending at speed ${this.currentSpeed}`);
    } else console.log("It's turned off");
  }

  powerOff(off) {
    if (off == "off") {
      this.power = false;
      this.currentSpeed = 0;
      console.log(`Turned off`);
    }
  }

  itsPowerOn() {
    if (this.power) {
      console.log("Its on");
    } else console.log("Its off");
  }
}

const Oster = new Blender({
  brand: "Oster",
  speeds: [0, 1, 2, 3, 4],
});

const Corona = new Blender({
  brand: "Corona",
  speeds: [0, 1, 2, 3],
});

const Universal = new Blender({
  brand: "Universal",
  speeds: [0, 1, 2],
});

const brands = [Oster, Corona, Universal];