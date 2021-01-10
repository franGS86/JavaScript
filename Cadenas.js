let cadena1 = "cadena de prueba";
let cadena2 = " cadena 2";

// concat sirve para concatenar string
resultado = cadena1.concat(" hola");

document.write(resultado + `<br>`);
// ---------------------------------
let cadena3 = "cadena de prueba";
let cadena4 = "cadena";

// starsWith sirve para saber si una cadena empiezan con los mismos caracteres que la otra devuelve un booleano
resultado = cadena3.startsWith(cadena4);

document.write(resultado + `<br>`);
//  ---------------------------------
let cadena5 = "cadena de prueba";
let cadena6 = "cadena";

// endsWith sirve para saber si una cadena finalizan con los mismos caracteres que la otra devuelve un booleano
resultado = cadena5.endsWith(cadena6);

document.write(resultado + `<br>`);
//  ---------------------------------
let cadena7 = "cadena de prueba";
let cadena8 = "cadena";

// includes sirve para saber si una cadena puede encontrarse dentro de otra, devuelve un booleano
resultado = cadena7.includes(cadena8);

document.write(resultado + `<br>`);
//  ---------------------------------
let cadena9 = "cadena de prueba";
let cadena10 = "prueba";

// indexOf sirve para saber la posicion que esta en la otra cadena devuelve un int
resultado = cadena9.indexOf(cadena10);

document.write(resultado + `<br>`);

let cadena11 = "cadena de prueba";
let cadena12 = "prueba";

// indexOf sirve para saber la posicion que esta en la otra cadena devuelve un int
resultado = cadena9.indexOf(cadena10);
// indicando una posion en la cadena nos devuelve la letra que esta en esa posicion
document.write(cadena11[10] + `<br>`);

let cadena13 = "cadena de prueba lastindexof";
let cadena14 = "lastindexof";

// lasIndexOf sirve para saber la posicion que esta la ultimas palabra
resultado = cadena13.lastIndexOf(cadena14);

document.write(resultado + `<br>`);

let cadena15 = "abc";

// padstart sirve para poder agregar texto al inicio, un numero de veces nesesario para que la cadena tenga 6
resultado = cadena15.padStart(6, "f");

document.write(resultado + `<br>`);

let cadena16 = "abc";

// padEnd sirve para poder agregar texto al final, un numero de veces
resultado = cadena16.padEnd(6, "f");

document.write(resultado + `<br>`);

let cadena17 = "abc";

// repeat sirve para repetir la caneda la cantidad de veces que se le indique
resultado = cadena17.repeat(6);

document.write(resultado + `<br>`);

let cadena18 = "abc";

// replace sirve para poder reemplazar texto indicando el texto a buscar para luego ser reeplazado
resultado = cadena18.replace("abc", "fran");

document.write(resultado + `<br>`);

let cadena19 = "hola como estas";

// replace sirve para poder reemplazar texto indicando el texto a buscar para luego ser reeplazado
resultado = cadena19.split(" ");

document.write(resultado + `<br>`);

let cadena20 = "ABCDFG";

// substring sirve para seleccionar un numero de caracteres el primer para metro es donde incia y el otro donde finaliza
resultado = cadena20.substring(0, 6);

document.write(resultado + `<br>`);

let cadena21 = "ABCDFG";

// substring sirve para seleccionar un numero de caracteres el primer para metro es donde incia y el otro donde finaliza
resultado = cadena21.toLowerCase(cadena21);

document.write(resultado + `<br>`);

let cadena22 = "abcdfg";

// substring sirve para seleccionar un numero de caracteres el primer para metro es donde incia y el otro donde finaliza
resultado = cadena22.toUpperCase(cadena22);

document.write(resultado + `<br>`);

let cadena23 = 50;

// toString sirve para convertir a cadena un dato
resultado = cadena23.toString();

document.write(2 * resultado + `<br>`);

let cadena24 = "    ABC                 DF    G";

// substring sirve para seleccionar un numero de caracteres el primer para metro es donde incia y el otro donde finaliza
resultado = cadena24.trim(cadena24);

document.write(resultado + `<br>`);

let cadena25 = "    ABCDFG";

// trimStart sirve para eliminar los espacios vacios de el inicio
resultado = cadena25.trimStart(cadena25);

document.write(resultado + `<br>`);

let cadena26 = "ABCDFG        ";

// trimEnd sirve para eliminar los espacios vacios de el final
resultado = cadena26.trimEnd(cadena26);

document.write(resultado + `<br>`);

let cadena27 = "ABCDFG";

// trimEnd sirve para eliminar los espacios vacios de el final
resultado = cadena27.length;

document.write(resultado + `<br>`);
