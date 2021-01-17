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
		return false;
	}
};
menu();

function menu() {
	let op = parseInt(prompt("1: Buscar por materia, 2: Mostrar todo"));

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
			let materiaux = array[i];
			let profesor = getInfromacion(array[i])[0][0];
			alumnos = getInfromacion(array[i])[0];
			alumnos.shift();

			document.write(
				`El profesor de <b style = "color:green">${materiaux} </b> es <b style="color: red"> ${profesor}</b><br>
        Los alumnos son: <b style = "color:blue">${alumnos}</b><br><br>`
			);
		}
		document.write(getInfromacion[1] + `<br>`);
		// document.write(jd + `<br>`);
	} else {
		alert("opcion incorrecta");
	}
}
