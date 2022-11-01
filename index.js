const scanf = require("scanf");
const { blenders } = require("./src/data");
const Blender = require("./src/app");

console.table(blenders);
console.log("Escriba la licuadora:");
let mixer;
let index = scanf("%S");

try {
  if (index == "") throw "empty";
  if (isNaN(index)) throw "not a number";
} catch (error) {
  console.log("Index is ", error);
}

try {
  if (!blenders[index]) throw "Invalido";
  mixer = new Blender(blenders[index].brand, blenders[index].speeds);
  /* --MARCA--*/
  console.clear();
  console.log(`** Marca ${mixer.brand} **`);
} catch (error) {
  console.log("mixer " + error);
  return;
}

let option;
let enter = function () {
  console.log("[Enter]");
  option = scanf("%s");
  console.clear();
};
const menu = () =>
  console.log(
    `---------------------
  Menú:
  1. Encender
  2. Liquar
  3. Apagar
  4. Comprobar estado
  5. Cerrar programa
  ----------------------`
  );
const output = () =>
  console.log(
    `--------------
  Marca: ${mixer.brand}
  Estado: ${mixer.power}
  Velocidades: ${mixer.speeds}
  Velocidad actual: ${mixer.currentSpeed} 
  ---------------`
  );

do {
  menu();
  console.log("Digite una opción: ");
  option = scanf("%d");

  switch (option) {
    case 1:
      console.clear();
      mixer.powerOn();
      output();
      enter();
      break;
    case 2:
      console.clear();
      console.log(`Digite la velocidad (1-${blenders[index].speeds.length})`);
      let speed = scanf("%d");
      try {
        mixer.liquefy(speed);
      } catch (error) {
        console.log(error);
      }
      output();
      enter();

      break;
    case 3:
      console.clear();
      mixer.powerOff();
      output();
      enter();

      break;

    case 4:
      console.clear();
      if (mixer.power) console.log("Está encendido");
      else console.log("Está apagado");
      output();
      enter();

      break;

    default:
      console.clear();
      console.log("\n", "Ingrese un valor válido", "\n");
      break;
  }
} while (option !== 5);

// console.log('Para encender la licuadora escriba "on":');
// encender = scanf("%S");
// console.clear();

// if (encender == "on") {
//   mixer.powerOn();
// } else mixer.powerOff();
// if (!mixer.isPowerOn()) {
//   console.log(`La licuadora ${mixer.brand} está apagada`);
// } else {
//   console.log(`La licuadora ${mixer.brand} está encendida`);
//   console.log(
//     `Insertar velocidad digite (0-${blenders[index].speeds.length - 1}):`
//   );
//   let speed = scanf("%d");

//   if (speed == blenders[index].speeds.find((option) => option == speed)) {
//     mixer.currentSpeed = speed;
//     mixer.liquefy(speed);
//   } else if (mixer.currentSpeed == 0) {
//     console.log(mixer.powerOff());
//   } else console.log("Velocidad inválida");
// }

// console.clear();
// if (mixer.checkSpeeds()) console.log(`Velocidad es ${mixer.checkSpeeds()}`);
// else console.log("Velocidad 0 / Apagado");

// /* --APAGADO-- */
// // console.clear();
// console.log(`
// Marca: ${mixer.brand}
// Estado: Encendido
// Velocidades: [${mixer.speeds}]
// Velocidad actual: ${mixer.currentSpeed}
// `);
// console.log('"off" para apagar / Enter para cambiar de velocidad:');
// encender = scanf("%S");
// console.clear();

// if (encender === "off") {
//   mixer.powerOff();
// } else console.clear;
