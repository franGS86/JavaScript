const sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) =>{
    return parseInt(num1) / parseInt(num2);
}

calculadora();

function calculadora(){
    alert("Que operacion desea realizar");
    let opcion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir");
    
    if (opcion == 1) {
        let num1 = parseInt(prompt("Ingrese el primer numero para sumar"));
        let num2 = parseInt(prompt("Ingrese el segundo numero para sumar"));
        let resultado = sumar(num1,num2);
        alert(`El resultado es ${resultado}`);
        
    } else if (opcion == 2) {
        let num1 = parseInt(prompt("Ingrese el primer numero para restar"));
        let num2 = parseInt(prompt("Ingrese el segundo numero para restar"));
        let resultado = restar(num1,num2);
        alert(`El resultado es ${resultado}`);
    
    } else if (opcion == 3) {
        let num1 = parseInt(prompt("Ingrese el primer numero para multiplicar"));
        let num2 = parseInt(prompt("Ingrese el segundo numero para multiplicar"));
        let resultado = multiplicar(num1,num2);
        alert(`El resultado es ${resultado}`);
    
    } else if (opcion == 4) {
        let num1 = parseInt(prompt("Ingrese el primer numero para dividir"));
        let num2 = parseInt(prompt("Ingrese el segundo numero para dividir"));
        let resultado = dividir(num1,num2);
        alert(`El resultado es ${resultado}`);
    } else{
        alert("No se encontro esa operacion");
        calculadora();    
    }

}
