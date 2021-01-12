// pop sirve para eliminar el ultimo elemento del array
document.write(`POP ` + `<br>`);
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
document.write(`SHIFT ` + `<br>`);
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
document.write(`PUSH` + `<br>`);
let array3 = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" + array3 + `<b><br>`);
let resultado3 = array3.push("fran");

// muestra cuanto elemento contiene el array
document.write(
	"Ahora contiene : <b style='color: red'>" +
		resultado3 +
		" elementos" +
		"</b><br>"
);
// como quedo el array despues del shift
document.write("Resultado: <b>" + array3 + `<b><br><br>`);

// reverse sirve para invertir el orden del array
document.write(`REVERSE ` + `<br>`);
let array4 = [1, 2, 3, 4, 5];

document.write("Array original: <b>" + array4 + `<b><br>`);
let resultado4 = array4.reverse();

// muestra el resultado
document.write(
	"Ahora contiene : <b style='color: red'>" + resultado4 + "</b><br><br>"
);

// unshift sirve para agreagr un elemento al inicio del array indicando por parametro donde inicia y los elementos a garegar
document.write(`UNSHIFT ` + `<br>`);
let array5 = [4, 5, 6, 7, 8];

document.write("Array original: <b>" + array5 + `<b><br>`);
let resultado5 = array5.unshift(0, 1, 2, 3);

// muestra cuanto elemento contiene el array
document.write(
	"Ahora contiene : <b style='color: red'>" +
		resultado5 +
		" elementos" +
		"</b><br>"
);
// como quedo el array despues del unshift
document.write("Resultado: <b>" + array5 + `<b><br><br>`);

// sort sirve para ordenar los elementos de un array funciona tambien con string
document.write(`SORT ` + `<br>`);
let array6 = [4, 7, 1, 9, 6, 2, 8, 3, 0];

document.write("Array original: <b>" + array6 + `<b><br>`);
let resultado6 = array6.sort();

// muestra cuanto elemento contiene el array
document.write(
	"Ahora contiene : <b style='color: red'>" + resultado6 + "</b><br><br>"
);

// splice sirve para eliminar elementos de un array indicano donde inicia y cuantos elimina
document.write(`SPLICE ` + `<br>`);
let array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.write("Array original: <b>" + array7 + `<b><br>`);
let resultado7 = array7.splice(0, 3); //tambien podemos agregar despues de borrar agregando ,"fran"

// muestra el elemento que elimino
document.write(
	"Elemento que se elimino: <b style='color: red'>" + resultado7 + "</b><br>"
);

// muestra el array despues del splice
document.write("Ahora contiene : " + array7 + "</b><br><br>");

// join sirve para covertilo en una cadena texto pero con funcion de poder agregar lo que quiera como separador
document.write(`JOIN ` + `<br>`);
let array8 = ["fran", "dylan", "rosa", "yuki"];

document.write("Array original: <b>" + array8 + `<b><br>`);
let resultado8 = array8.join(" - "); //tambien podemos agregar despues de borrar agregando ,"fran"

// muestra el elemento que elimino
document.write(
	"El nuevo array con los separadores: <b style='color: red'>" +
		resultado8 +
		"</b><br><BR>"
);

// slice sirve para selecionar los elementos de una array por medio de parametros indicando donde inica y donde termina
document.write(`SLICE ` + `<br>`);
let array9 = ["fran", "dylan", "rosa", "yuki"];

document.write("Array original: <b>" + array9 + `<b><br>`);
let resultado9 = array9.slice(0, 2);

// muestra el elemento que elimino
document.write(
	"Elementos selecionados: <b style='color: red'>" + resultado9 + "</b><br><br>"
);

// filter sirve para buscar por catidad de caracteres de tienen los elementos del array
document.write(`FILTER ` + `<br>`);
let array10 = ["fran", "dylan", "rosa", "yuki"];

document.write("Array original: <b>" + array10 + `<b><br>`);
let resultado10 = array10.filter((array10) => array10.length > 4);

// muestra el elemento que elimino
document.write(
	"Elementos selecionados: <b style='color: red'>" + resultado10 + "</b><br><br>"
);


