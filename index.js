let scanf = require('scanf');
// const {Oster, Corona, Universal} = require('./src/data');
let Blender = require('./src/app');

let oster = new Blender('Oster');

/* --MARCA--*/
console.log(`Marca ${oster.brand}`)

/* --ENCENDIDO-- */
// oster.powerOn();
console.log('Para encender la licuadora escriba "on":')
let encender = scanf('%S');
if (encender == 'on') {
  oster.powerOn();
}

if (oster.isPowerOn()) {
  console.log('La licuadora está encendida');
  console.log('Insertar velocidad digite (0-3):');
  let speed = scanf('%d');

  if (speed >= 1 && speed <= 3)
    oster.liquefy(speed);
  else if (speed == 0) {
    console.log(oster.powerOff());
  } else
    console.log('Velocidad inválida');

} else
  console.log('La licuadora está apagada');

if (oster.checkSpeeds())
  console.log(`Vecloidad es ${oster.checkSpeeds()}`);
else
  console.log('Velocidad 0 / Apagado');

/* --APAGADO-- */
console.log('Para apagar escriba "off":')
let apagar = scanf('%S');
if (apagar == 'off')
  console.log(oster.powerOff());
