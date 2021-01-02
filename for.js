document.write("FOR "+"<br>"+"<br>");

for(let i=0; i<10; i++){

    document.write("For normal "+i+"<br>");

}
document.write("<br>");

// for con continue
document.write("FOR CON CONTINUE "+"<br>"+"<br>");

for(let i=0; i<10; i++){

    if(i==4){
        document.write("Se elimino el 4 con la funcion continue"+"<br>");

        continue;
    }

    document.write("For con continue "+i+"<br>");

}

// for in devuelve el indice
document.write("<br>"+"FOR IN "+"<br>"+"<br>");

let animales = ["perro", "gato", "gallina", "perico"];

for (animal in animales) {
   
    document.write(animales[animal]+"<br>");

}