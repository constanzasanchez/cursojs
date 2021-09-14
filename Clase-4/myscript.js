//Funcion simple vista en clases y en apuntes
function saludar() {
    console.log("Buenas noches!");
}
saludar();

//1. Declaro la funcion para calcular IVA
function calculo(){
    
    let monto = parseInt(prompt("Escriba el monto de su producto:"));
    console.log("El precio del producto es: ", monto);
    let tasa = 21;
    console.log ("La tasa del IVA es de: ", tasa);
    let iva = (monto * tasa)/100;
    console.log("El IVA aplicado a tu producto es: ", iva);
    let resultado = monto + iva;
    console.log("El precio final de tu producto es: ", resultado);
}
calculo()

//2. Tabla 
function tablaDeNumeroIngresado() {
let tablaIngresada = prompt("Ingrese un número para ver su tabla: ");
let tablaNumero = parseInt(tablaIngresada);
for (let i = 1; i <= 10; i++) {
    console.log(i + "x" + tablaNumero + " = " + i*tablaNumero);}
}
tablaDeNumeroIngresado()

//2. Determino si un numero es múltiplo
function multiplo() {
    let solicitarNumero = parseInt(prompt("Escriba un número múltiplos del 3:"));
    if(( solicitarNumero % 3 ) == 0){
        alert(solicitarNumero + ' es multiplo de 3');        
    }else{
        alert(solicitarNumero + ' no es multiplo de 3');
    }
}

multiplo();

//3. Funcion de suma en el cual el usuario elige que numeros usar con parametros
function suma(pnumero1, pnumero2) {
    let resultado = pnumero1 + pnumero2;
    return resultado;
}

let numero1 = parseInt(prompt("Escriba un número para sumar:"));
let numero2 = parseInt(prompt("Escriba otro número para sumar:"));
console.log("El resultado de la suma es de: ", suma(numero1,numero2));