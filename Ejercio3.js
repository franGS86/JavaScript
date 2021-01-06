class Celulares {
	constructor(color, peso, tamaño, rdp, rdc, ram) {
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDePantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memeriaRam = ram;
	}
	precionarBotonEncendido() {
		if (this.encendido == true) {
			alert("El celular esta apagado");
			this.encendido = false;
		} else {
			alert("celular prendido");
			this.encendido = true;
		}
	}
	reiniciar() {
		if (this.encendido == true) {
			alert("Reiniciando celular");
		} else {
			alert("El celular esta apagado");
		}
	}
	tomarFoto() {
		alert(`Foto tomada en una resolucion ${this.resolucionDeCamara}`);
	}
	grabarVideo() {
		alert(`Grabando videos en ${this.resolucionDeCamara}`);
	}
	mostrarinfo() {
		return;
		`color: <b>${this.color}</b><br> 
        peso: <b>${this.peso}</b><br> 
        tamaño: <b>${this.tamaño}</b><br> 
        resolucion de Camara: <b>${this.rdp}</b><br> 
        resolucion de video: <b>${this.rdc}</b><br> 
        memoria ram:<b>${this.ram}</b><br> `;
	}
}

const celular1 = new Celulares("rojo", "150g", "5", "full", "1GB");
const celular2 = new Celulares("negro", "110g", "5.6", "full hd", "2GB");
const celular3 = new Celulares("blanco", "130g", "6", "full hd", "2GB");

// celular1.precionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.precionarBotonEncendido();

document.write(
	`${celular1.mostrarinfo()}<br>
    ${celular2.mostrarinfo()}<br>
    ${celular3.mostrarinfo()}`
);
