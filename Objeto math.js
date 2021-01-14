document.write(
	`<b style='color: red'> Math.sqrt</b> sirve para sacar la raiz cuadrada de un numero ` +
		`<br>`
);
document.write(`La raiz cuadrada de <b style='color: red'> 29 </b> es =  `);
let num1 = Math.cbrt(29);
document.write(num1 + `<br><br>`);

// Math.max
document.write(
	`<b style='color: red'> Math.max</b> sirve para verificar cual numero es mas alto ` +
		`<br>`
);

let num2 = Math.max(20, 50, 80, 864, 90);

document.write(
	`Los numeros son <b style='color: red'>20,50,80,864,90  </b> el numero mas alto es =  `
);

document.write(num2 + `<br><br>`);

// Math.min
document.write(
	`<b style='color: red'> Math.min</b> sirve para verificar cual numero es mas alto ` +
		`<br>`
);

let num3 = Math.min(20, 50, 80, 864, 90);

document.write(
	`Los numeros son <b style='color: red'>20,50,80,864,90  </b> el numero mas alto es =  `
);

document.write(num3 + `<br><br>`);

// Randon
document.write(
	`<b style='color: red'>Math.randon </b> nos tira un numero aletorio entre 0 y 1 ` +
		`<br>`
);
let num4 = Math.random();
document.write(num4 + `<br><br>`);

// Round
document.write(
	`<b style='color: red'>Math.round </b> nos redondea un numero que le ingresemos por parametro ` +
		`<br>`
);
let aux1 = Math.random() * 100; //se multiplica por 100 para que nos tire entre 1 y 100
let num5 = Math.round(aux1);
document.write(num5 + `<br><br>`);

// Floor
document.write(
	`<b style='color: red'>Math.floor </b> nos redondea hacia abajo ` + `<br>`
);
let aux2 = Math.random() * 100; //se multiplica por 100 para que nos tire entre 1 y 100
let num6 = Math.floor(aux2);
document.write(num6 + `<br><br>`);

// Trunc
document.write(
	`<b style='color: red'>Math.trunc </b> elimina los decimales ` + `<br>`
);
let aux3 = Math.random() * 100; //se multiplica por 100 para que nos tire entre 1 y 100
let num7 = Math.trunc(aux3);
document.write(num7 + `<br><br>`);

// Pi
document.write(`<b style='color: red'>Math.PI </b> nos devuelve pi ` + `<br>`);
let num8 = Math.PI;
document.write(num8 + `<br><br>`);

// SQRT1_2
document.write(
	`<b style='color: red'>Math.SQRT1_2 </b> nos devuelve la raiz cuadrada de un medio ` +
		`<br>`
);
let num9 = Math.SQRT1_2;
document.write(num9 + `<br><br>`);

// SQRT2
document.write(
	`<b style='color: red'>Math.SQRT2 </b> nos devuelve la raiz cuadrada de 2 ` +
		`<br>`
);
let num10 = Math.SQRT2;
document.write(num10 + `<br><br>`);

// E
document.write(
	`<b style='color: red'>Math.E </b> nos devuelve la base de los logaritmos naturales ` +
		`<br>`
);
let num11 = Math.E;
document.write(num11 + `<br><br>`);

// LN2
document.write(
	`<b style='color: red'>Math.LN2 </b> nos devuelve logaritmo natural de 2 ` +
		`<br>`
);
let num12 = Math.LN2;
document.write(num12 + `<br><br>`);

// LN10
document.write(
	`<b style='color: red'>Math.LN10 </b> nos devuelve logaritmo natural de 10 ` +
		`<br>`
);
let num13 = Math.PI;
document.write(num13 + `<br><br>`);

// LOG2E
document.write(
	`<b style='color: red'>Math.LOG2E </b> nos devuelve logartimo de e con base 2 ` +
		`<br>`
);
let num14 = Math.LOG2E;
document.write(num14 + `<br><br>`);

// LOG10E
document.write(
	`<b style='color: red'>Math.LOG10E </b> nos devuelve logaritmo de E con base 10 ` +
		`<br>`
);
let num15 = Math.LOG10E;
document.write(num15 + `<br>`);
