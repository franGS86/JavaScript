let free = false;

const validarCliente = (time)=>{
    
let edad = parseInt( prompt("Cual es su edad?"));
if(edad > 18){
   if(time >= 2 && time < 7 && free == false){
      alert("Puedes entrar gratis ya son las 02:00 AM");
      free == true;

}else{
    alert(`Son las ${time}:00HS Puedes pasar pagando la entrada`);
}

}else{
    alert("NO puedes ingresar");
}
}
// El numero 2 es la hora que se manda por parametro
validarCliente(2);

// Segundo problema validar ausencias usando un array dentro de otro

let catidadAlumnos = parseInt(prompt("Cuantos alumnos son"));
let alumnosTotales = [];

for (let i = 0; i < catidadAlumnos; i++) {
alumnosTotales[i]= [prompt("Nombre del alumno" + (i+1)),0];

}

const tomarAsistencia = (nombre,p)=>{

let presencia = prompt(nombre);
if(presencia == "p" || presencia == "P"){
alumnosTotales[p][1]++;
}

for (let i = 0; i < 5; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    Ausencias: <b>${5 - alumnosTotales[alumno][1]}</b>`;

    if(5 - alumnosTotales[alumno][1] > 3){

    resultado+= "<b style = `color:red`> REPROBADO POR AUSENCIAS</b><br><br>";

    }else{
    resultado+="<br><br>";
    }
    document.write(resultado);
}
}