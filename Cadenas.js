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

// includes sirve para saber si una cadena puede encontrarse dentro de otra, devuelve un booleano
resultado = cadena9.indexOf(cadena10);

document.write(resultado + `<br>`);
