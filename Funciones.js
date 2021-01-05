function saludar() {
	let saludo = prompt("Hola como esta tu dia");

	if (saludo == "bien") {
		alert("Me alegro");
	} else {
		alert("Una pena");
	}
}
// llamamos al funcion y se ejecutara el codigo que contiene
saludar();

function saludar2() {
	let saludo = prompt("Hola como esta tu dia");

	if (saludo == "bien") {
		alert("Me alegro");
	} else {
		alert("Una pena");
	}
	// cuando se agrega un return se termina de ejecutar la funcion
	return "El programa se ejecuto con exito";
}
// Si queremos que la funcion nos devuelva algo se usa un RETURN
let back = saludar2();
document.write(back);

// FUNCIONES CON PARAMETROS ///////////////////////////////////////////

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

function suma() {
	let res = num1 + num2;
	document.write(res);
}
suma(num1, num2);
