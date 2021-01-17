class Calculadora {
	constructor() {}
	sumar(num1, num2) {
		return num1 + num2;
	}

	restar(num1, num2) {
		return num1 - num2;
	}

	multiplicar(num1, num2) {
		return num1 * num2;
	}

	dividir(num1, num2) {
		return num1 / num2;
	}

	potencia(num1, exp) {
		return num1 ** exp;
	}

	raizCuadrada(num1) {
		return Math.sqrt(num1);
	}

	raizCubica(num1) {
		return Math.cbrt(num1);
	}
}

const calcu = new Calculadora();

alert("Que operacion desea realizar");
let opcion = prompt(
	"1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: potenciacion, 6: Raiz cuadrada, 7: Raiz cubica"
);

if (opcion == 1) {
	let num1 = parseInt(prompt("Ingrese el primer numero para sumar"));
	let num2 = parseInt(prompt("Ingrese el segundo numero para sumar"));
	let resultado = calcu.sumar(num1, num2);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 2) {
	let num1 = parseInt(prompt("Ingrese el primer numero para restar"));
	let num2 = parseInt(prompt("Ingrese el segundo numero para restar"));
	let resultado = calcu.restar(num1, num2);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 3) {
	let num1 = parseInt(prompt("Ingrese el primer numero para multiplicar"));
	let num2 = parseInt(prompt("Ingrese el segundo numero para multiplicar"));
	let resultado = calcu.multiplicar(num1, num2);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 4) {
	let num1 = parseInt(prompt("Ingrese el primer numero para dividir"));
	let num2 = parseInt(prompt("Ingrese el segundo numero para dividir"));
	let resultado = calcu.dividir(num1, num2);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 5) {
	let num1 = parseInt(prompt("Ingrese el numero a potenciar"));
	let exp = parseInt(prompt("Ingrese el exponente"));
	let resultado = calcu.potencia(num1, exp);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 6) {
	let num1 = parseInt(prompt("Ingrese el numero"));
	let resultado = calcu.raizCuadrada(num1);
	alert(`El resultado es ${resultado}`);
} else if (opcion == 7) {
	let num1 = parseInt(prompt("Ingrese el numero"));
	let resultado = calcu.raizCubica(num1);
	alert(`El resultado es ${resultado}`);
} else {
	alert("No se encontro esa operacion");
}
