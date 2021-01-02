let cofla = "Cofla";
let pedro = "Pedro";
let reberto = "Roberto";

dineroCofla = prompt(cofla + " caunto dinero tienes");
dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(prompt(pedro + " caunto dinero tienes"));
dineroPedro = parseInt(prompt(reberto + " cunto dinero tienes"));

// Cofla

if(dineroCofla >= 0.6 && dineroCofla < 1){

    alert(cofla + " Comprate el helado de agua");
    alert(cofla + " te sobran " + (dineroCofla - 0.6));

}else if(dineroCofla >= 1 && dineroCofla < 1.6){
    
    alert(cofla + " comprate un helado de crema");
    alert(cofla + " te sobran " + (dineroCofla - 1));

}else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    
    alert(cofla + " comprate un helado de doble crema");
    alert(cofla + " te sobran " + (dineroCofla - 1.6));

}else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    
    alert(cofla + " comprate un helado de crema con condensada");
    alert(cofla + " te sobran " + (dineroCofla - 1.7));

}else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    
    alert(cofla + " comprate un helado de crema con condesada y mani");
    alert(cofla + " te sobran " + (dineroCofla - 1.8));


}else if(dineroCofla >= 2.9){
    
    alert(cofla + " comprate un helado de crema triple y con cispas de cholate ");
    alert(cofla + " te sobran " + (dineroCofla - 2.9));


}else{

    alert(cofla + " Lo siento no te alcanza para ningun helado");

}

// Pedro

if(dineroPedro >= 0.6 && dineroPedro < 1){

    alert(pedro + " Comprate el helado de agua");
    alert(pedro + " te sobran " + (dineroPedro - 1.7));


}else if(dineroPedro >= 1 && dineroPedro < 1.6){
    
    alerte(pedro + " comprate un helado de crema");
    alert(pedro + " te sobran " + (dineroPedro - 1));

}else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    
    alert(pedro + " comprate un helado de doble crema");
    alert(pedro + " te sobran " + (dineroPedro - 1.6));

}else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    
    alert(pedro + " comprate un helado de crema con condensada");
    alert(pedro + " te sobran " + (dineroPedro - 1.7));

}else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    
    alert(pedro + " comprate un helado de crema con condesada y mani");
    alert(pedro + " te sobran " + (dineroPedro - 1.8));

}else if(dineroPedro >= 2.9){
    
    alert(pedro + " comprate un helado de crema triple y con cispas de cholate ");
    alert(pedro + " te sobran " + (dineroPedro - 2.9));

}else{

    alert(pedro + " Lo siento no te alcanza para ningun helado");

}

// Roberto

if(dineroRoberto >= 0.6 && dineroRoberto < 1){

    alert(roberto + " Comprate el helado de agua");
    alert(roberto + " te sobran " + (dineroRoberto - 0.6));

}else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    
    alertdocument.write(reberto + " comprate un helado de crema");
    alert(roberto + " te sobran " + (dineroRoberto - 1));

}else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    
    alert(reberto + " comprate un helado de doble crema");
    alert(roberto + " te sobran " + (dineroRoberto - 1.6));

}else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    
    alert(reberto + " comprate un helado de crema con condensada");
    alert(roberto + " te sobran " + (dineroRoberto - 1.7));

}else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    
    alert(reberto + " comprate un helado de crema con condesada y mani");
    alert(reberto + " te sobran " + (dineroRoberto - 1.8));

}else if(dineroRoberto >= 2.9){
    
    alert(reberto + " comprate un helado de crema triple y con cispas de cholate ");
    alert(roberto + " te sobran " + (dineroRoberto - 2.9));

}else{

    alert(reberto + " Lo siento no te alcanza para ningun helado");

}