class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.verinfo = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo() {
		document.write(this.verinfo + "<br>");
	}
}

class Perro extends animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad, color, raza);
		this.raza = null;
	}
	static ladrar() {
		// alert("WAW");
		document.write("WAW");
	}
}

const perro = new animal("perro", 5, "maron", "chiguagua");
const gato = new animal("gato", 2, "negro");
const pajaro = new animal("pajaro", 1, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

Perro.ladrar();
