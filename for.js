document.write("FOR " + "<br>" + "<br>");

for (let i = 0; i < 10; i++) {
	document.write("For normal " + i + "<br>");
}
document.write("<br>");

// for con continue
document.write(
	"FOR CON CONTINUE se salta el elemento de queramos " + "<br>" + "<br>"
);

for (let i = 0; i < 10; i++) {
	if (i == 4) {
		document.write("Se salto el 4 con la funcion continue" + "<br>");

		continue;
	}

	document.write("For con continue " + i + "<br>");
}

// for in devuelve el indice delos elementos
document.write(
	"<br>" + "FOR IN devuelve el indice de los elementos " + "<br>" + "<br>"
);
// FOR IN

let animales = ["perro", "gato", "gallina", "perico"];

for (animal in animales) {
	document.write(animales[animal] + "=");
	document.write(animal + "<br>");
}

// FOR OF devuelve el valor de los elementos
document.write(
	"<br>" + "FOR OF devuelve el valor de los elementos " + "<br>" + "<br>"
);

for (animal of animales) {
	document.write(animal + "<br>");
}

// label
document.write("<br>" + "FOR IN y FOR OF en conjunto" + "<br>" + "<br>");

let array1 = ["ana", "juan", "pedro", "fran"];
let array2 = ["rosa", "dylan", "yuki", array1];

for (let array in array2) {
	// cuando este en el indice 3 que esta el otro array este se recorre
	if (array == 3) {
		for (let array of array1) {
			document.write(array + "<br>");
		}
	} else {
		document.write(array2[array] + "<br>");
	}
}

// si queremos usar un continue o un break para uno o los for utilizamos un label
document.write(
	"<br>" +
		"FOR IN y FOR OF utilizando un cotinue o un break con LABEL" +
		"<br>" +
		"<br>"
);

// label
frolabel: for (let array in array2) {
	// cuando este en el indice 3 que esta el otro array este se recorre
	if (array == 3) {
		for (let array of array1) {
			continue frolabel;
			document.write(array + "<br>");
		}
	} else {
		document.write(array2[array] + "<br>");
	}
}
