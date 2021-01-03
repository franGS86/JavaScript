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