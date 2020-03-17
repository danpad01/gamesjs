var vida = 100;
var ataque = 10;
var pocion = 20;

function ataqueEnemigo(){
    vida -= ataque;
    muestraVida();
}

function bebePocion(){
    vida += pocion;
    muestraVida();
}

function muestraVida(){
    console.log("Nivel del vida del Héroe:");
    console.log(vida);
}