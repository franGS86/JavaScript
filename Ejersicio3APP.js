class App {
	constructor(descargas, puntuacion, peso) {
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abrir() {
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar() {
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar() {
		if (this.instalada == false) {
			this.instalada = true;
			alert("app intalada correctamente");
		}
	}
	desinstalar() {
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	appinfo() {
		return `Desacargas: <b>${this.descargas}</b><br>
	    Puntuacion: <b>${this.puntuacion}</b><br>
	    Peso: <b>${this.peso}</b><br>`;
	}
}

app = new App("16.000", "5 estrellas", "9000mb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

App1 = new App("16.000", "5.9 estrellas", "900mb");
App2 = new App("1.000", "4 estrellas", "400mb");
App3 = new App("10.000", "5 estrellas", "300mb");
App4 = new App("20.000", "4.5 estrellas", "800mb");
App5 = new App("5.000", "5.2 estrellas", "100mb");
App6 = new App("14.000", "3.8 estrellas", "400mb");
App7 = new App("8.000", "2.1 estrellas", "500mb");

document.write(`
${App1.appinfo()}<br>
${App2.appinfo()}<br>
${App3.appinfo()}<br>
${App4.appinfo()}<br>
${App5.appinfo()}<br>
${App6.appinfo()}<br>
${App7.appinfo()}<br>
`);
