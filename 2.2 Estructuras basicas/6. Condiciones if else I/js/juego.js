var numero1, numero2;


function suma(num1, num2){
    var valor;
    valor = num1 + num2;
    return valor;
}


function accion(){
    numero1 = parseInt(prompt('Introduce primer numero'));
    numero2 = parseInt(prompt('Introduce segundo numero'));
    resultado = suma(numero1, numero2);
    console.log(resultado);
}
