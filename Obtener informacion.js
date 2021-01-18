const getInfromacion = (materia) => {
	materias = {
		fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
		programacion: ["Gonzalez", "pedro", "juan", "pepito"],
		logica: ["Rojas", "pedro", "juan", "pepito", "cofla", "maria"],
		quimica: ["Garita", "pedro", "juan", "pepito", "cofla", "maria"],
	};
	if (materias[materia] !== undefined) {
		return [materias[materia], materia];
	} else {
		return materias;
	}
};

const cantidadDeClases = (alumno) => {
	let informacion = getInfromacion();
	let clasesPresente = [];
	let catidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			catidadTotal++;
			clasesPresente.push(" " + info);
		}
	}
	return `<b style='color:red'>${alumno}</b> esta en ${catidadTotal} clases<br>
	Esta cursando las clases: <b>${clasesPresente}</b><br><br>`;
};

menu();

function menu() {
	let op = parseInt(
		prompt(
			"1: Buscar por materia, 2: Mostrar todo, 3: Buscar catidad de materias por alumno, 4: Mostar la catidad de materias de todos los alumnos"
		)
	);

	if (op == 1) {
		let informacion = getInfromacion(
			"fisica",
			"programacion",
			"logica",
			"quimica"
		);

		if (informacion !== false) {
			let mate = prompt("Ingrese la materia");
			if (
				mate == "fisica" ||
				mate == "programacion" ||
				mate == "logica" ||
				mate == "quimica"
			) {
				let profesor = getInfromacion(mate)[0][0];
				alumnos = getInfromacion(mate)[0];
				alumnos.shift();

				document.write(
					`El profesor de <b style = "color:green">${mate}</b> es <b style="color: red"> ${profesor}</b><br>
        Los alumnos son: <b style = "color:blue">${alumnos}</b><br><br>`
				);
			} else {
				alert(`ERROR`);
				menu();
			}
		} else {
			document.write(`Materia no encontrada ` + `<br>`);
		}
	} else if (op == 2) {
		array = ["fisica", "programacion", "logica", "quimica"];

		for (let i = 0; i < array.length; i++) {
			var arrayAlumnos = [];
			let materiaux = array[i];
			let profesor = getInfromacion(array[i])[0][0];
			alumnos = getInfromacion(array[i])[0];
			alumnos.shift();
			arrayAlumnos.push(alumnos);

			document.write(
				`El profesor de <b style = "color:green">${materiaux} </b> es <b style="color: red"> ${profesor}</b><br>
        Los alumnos son: <b style = "color:blue">${alumnos}</b><br><br>`
			);
		}

		for (let i = 0; i < arrayAlumnos.length; i++) {
			document.write(arrayAlumnos[i] + `<br>`);
		}
	} else if (op == 3) {
		let aux2 = prompt("selecione el alumno");

		document.write(cantidadDeClases(aux2) + `<br>`);
	} else if (op == 4) {
		array2 = ["pedro", "maria", "juan", "pepito", "cofla"];

		for (let i = 0; i < array2.length; i++) {
			document.write(cantidadDeClases(array2[i]) + `<br>`);
		}
	} else {
		alert("opcion incorrecta");
	}
}
