let scanf = require('scanf');
// const {Oster, Corona, Universal} = require('./src/data');
let Blender = require('./src/app');

let oster = new Blender('Oster');
let universal = new Blender('Universal');

/* --MARCA--*/
console.log(`Marca ${oster.brand}`)

/* --ENCENDIDO-- */
// oster.powerOn();
console.log(oster.powerOn());

/* --APAGADO-- */
// oster.powerOff();
// console.log(oster.powerOff());

if (oster.isPowerOn()) {
  console.log('La licuadora está encendida');
  console.log('Insertar velocidad entre (0-3):');
  let speed = scanf('%d');
  if (speed >= 1 && speed <= 3)
    oster.liquefy(speed);
  else if (speed == 0) {
    console.log(oster.powerOff());
  } else console.log('Velocidad inválida');
} else console.log('La licuadora está apagada');

if (oster.checkSpeeds()) {
  console.log(`Vecloidad es ${oster.checkSpeeds()}`);
} else console.log('Velocidad 0');

