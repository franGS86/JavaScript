//ARRAY POR POSICION
let frutas = ["bananos", "mangos", "piñas", "naranjas"];
// sixtaxis para agregar un elemento al array
frutas.push("fresas");
alert(frutas);

// sixtaxis para eliminar un elemeto en especifico

let borrar = prompt("ingrece la fruta que desea eliminar")
let aux = frutas.findIndex(futas => futas === borrar);
alert("indice de la fruta " + aux);
frutas.splice(aux, 1);
alert(frutas);

// sixtaxis para reenplazar un elemento

let borrar1 = prompt("ingrece la fruta que desea eliminar");
let reemplazar = prompt("ingrece la fruta que desea reemplazar");
let aux1 = frutas.findIndex(futas => futas === borrar1);
alert("indice de la fruta " + aux);
frutas.splice(aux, 1, reemplazar);
alert(frutas);


// document.write(frutas[0]);
// document.write(frutas[1]);
// document.write(frutas[2]);
// document.write(frutas[3]);
// frutas.push("fresas");

//ARRAY POR NOMBRE
let pc ={

    nombre: "fran", procesador: "i9",
    ram: "16 ram", almacenamiento: "1tb"
    
     }

    //  let opcion = prompt("Cual informacion requiere de la pc");

     alert(pc[opcion]);
    
    document.write(pc["procesador"]);

    // otra forma es de utilizar el contenido de un array por nombre

    let nombre = pc["nombre"];
    let ram = pc["ram"];
    let procesador = pc["procesador"];
    let almacenamiento = pc["almacenamiento"];


frase = `El nombre de mi pc es: ${nombre} <br>
la memoria ram es de ${ram} <br>
el procesador es un ${procesador} <br>
el almacenamiento es de ${almacenamiento}`;

document.write(frase);
