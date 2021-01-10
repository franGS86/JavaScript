// pop sirve para eliminar el ultimo elemento del array
let array1 = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" + array1 + `<b><br>`);
let resultado1 = array1.pop();

// muestra el elemento que elimino
document.write(
	"Elemento que se elimino: <b style='color: red'>" + resultado1 + "</b><br>"
);
// como quedo el array despues del shift
document.write("Resultado: <b>" + array1 + `<b><br><br>`);

// shift sirve para eliminar el primer elemento del array
let array2 = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" + array2 + `<b><br>`);
let resultado2 = array2.shift();

// muestra el elemento que elimino
document.write(
	"Elemento que se elimino: <b style='color: red'>" + resultado2 + "</b><br>"
);
// como quedo el array despues del shift
document.write("Resultado: <b>" + array2 + `<b><br><br>`);

// push sirve para agreagr un elemento al final del array
let array3 = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" + array3 + `<b><br>`);
let resultado3 = array3.push("fran");

// muestra el elemento que elimino
document.write(
	"Ahora contiene : <b style='color: red'>" +
		resultado3 +
		" elementos" +
		"</b><br>"
);
// como quedo el array despues del shift
document.write("Resultado: <b>" + array3 + `<b><br>`);
