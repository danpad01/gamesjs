/*
DEPRECATED
document.addEventListener("keydown", function(tecla){
    //console.log(tecla.keyCode);
    if(tecla.keyCode == 32)
        console.log("Espacio");
    else if (tecla.keyCode == 38)
        console.log("Arriba");
});
*/

//Previene que al pulsar nos cuente por accidente 
//varias pulsaciones por mantener
var configTeclado = {
    prevent_repeat: true
};

var eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaA(){
    console.log("Has pulsado A");
}

function pulsaCD(){
    console.log("Has pulsado C y D a la vez");
}

function cheat(){
    console.log("now yoy can't die");
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('c d', pulsaCD);
eventoTeclado.sequence_combo("i d d q d", cheat);
