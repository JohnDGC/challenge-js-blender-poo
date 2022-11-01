const scanf = require("scanf");
const { blenders } = require("./src/data");
const Blender = require("./src/app2");

console.table(blenders);
console.log("Escriba la licuadora:");
let mixer;
let index = scanf("%S");;

try {
  if (index == '')
    throw 'empty';
  if (isNaN(index))
    throw 'not a number';
} catch (error) {
  console.log('Index is ', error)
}

try {
  if (!blenders[index])
    throw "Invalido";
  mixer = new Blender(blenders[index].brand, blenders[index].speeds);
  /* --MARCA--*/
  console.clear();
  console.log(`Marca ${mixer.brand}`);
} catch (error) {
  console.log("mixer " + error);
  return
}

/* --ENCENDIDO-- */
let encender;
console.log('Para encender la licuadora escriba "on":');
encender = scanf("%S");
console.clear();

try {
  if (encender === "on") {
    mixer.powerOn();
  } else
    throw new Error('La palabra introducida no es la correcta');

} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}

do {

  if (!mixer.isPowerOn()) {
    console.log(`La licuadora ${mixer.brand} está apagada`);
    return;
  } else {
    console.log(`La licuadora ${mixer.brand} está encendida`);
    console.log(`Insertar velocidad digite (0-${blenders[index].speeds.length - 1}):`);
    let speed = scanf("%S");
    console.clear();

    try {
      if (isNaN(speed)) throw 'not a number';
      if (speed > mixer.speeds.length) throw 'inválida';
      if (speed == '') throw 'empty';
    } catch (error) {
      console.log('Velocidad ' + error);
    }

    if (speed == blenders[index].speeds.find((option) => option == speed)) {
      mixer.currentSpeed = speed;
      mixer.liquefy(speed);
    } else if (mixer.currentSpeed == 0) {
      console.log(mixer.powerOff());
      // console.clear()
    } 


    if (mixer.checkSpeeds())
      console.log(`Velocidad es ${mixer.checkSpeeds()}`);
    else
      console.log("Velocidad 0 / Apagado");

    /* --APAGADO-- */
    // console.clear();
    // console.log(`
    // Marca: ${mixer.brand}
    // Estado: ${mixer.power}
    // Velocidades: [${mixer.speeds}]
    // Velocidad actual: ${mixer.currentSpeed}
    // `);
    
    console.log('"off" para apagar / Enter para cambiar de velocidad:');
    encender = scanf("%S");
    console.clear();
  }

  if (encender === "off") {
    mixer.powerOff();
  } else console.clear;

} while (encender !== "off");
