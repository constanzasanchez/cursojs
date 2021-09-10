//Pido números por prompt y sumo esos números en cada repetición: 

const number1 = parseInt(prompt("Escribe un número:"));
console.log(number1);

for (let i = 0; i<5 ; i++){
  const number2 = parseInt(prompt("Escribe otro número:"));
  const resultado = number1 + number2;
  alert("La suma de los numeros ingresados es " + resultado);
}

//Pido un texto por prompt y se concatenan los valores

const diasSemana = prompt("Ingrese el primer día de la semana: ");
let semanaCompleta = diasSemana;

for (let i = 0; i<6 ; i++) {
  const siguienteDia = prompt("Ingrese el siguiente día de la semana: ");
  semanaCompleta += ", " + siguienteDia;
  console.log(semanaCompleta);
}

//Se ingresan los dias de la semana hasta que se ingresa "domingo" con posibilidad de frenar con "ESC":

let texto = "Los días de la semana son:";
let textoResultado = texto;
ingreso = "";

while (ingreso != "domingo") {
  ingreso = prompt("Escribe un día de la semana:").toLowerCase();
  if (ingreso === "esc"){
    break;}
  textoResultado += " " + ingreso + ", ";
  console.log(textoResultado);  
}

//Se repite "Hello World" la cantidad de veces que establece el número solicitado por prompt.

const solicitoNumero = parseInt(prompt("Escriba un número"));

for (let i = 0; i < solicitoNumero; i++){
  alert("Hello World!");
}
