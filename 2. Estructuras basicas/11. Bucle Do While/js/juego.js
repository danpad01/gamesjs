var numeroCPU = Math.floor(Math.random() * 10 + 1)
var numeroUsuario;




do{
    numeroUsuario = parseInt(prompt("Adivina el numero que he pensado"));

    if(numeroCPU == numeroUsuario){
        console.log("Has certado");
    }
    else{
        if(numeroCPU > numeroUsuario){
            alert("El numero es mayor");
        }
        else{
            alert("El numero es menor");
        }
    }
}while(numeroCPU != numeroUsuario)