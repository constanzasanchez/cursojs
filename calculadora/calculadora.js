function saludar() {
	const nombre = prompt("Cual es tu nombre?");
	alert("Bienvenido/a "+nombre+"!")
}
saludar()
function suma() {
	let numero1 = parseFloat(document.getElementById('numero1').value);
	let numero2 = parseFloat(document.getElementById('numero2').value);
	let resultado = numero1 + numero2;
	document.getElementById('resultado').value = resultado;
	}