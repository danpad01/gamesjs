var turno = 1;
var vida = 100;


//ESTADOS DEL JUGADOR
var vivo = true;
var envenenado = false;
var quemado = false;


//JUGADAS CPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;


function muestraEstadoJugador(){
    if(envenenado){
        console.log('Envenenado');
    }

    if(quemado){
        console.log('Quemado');
    }

}


function juegaTurno(){
    var jugadaCPU = Math.floor(Math.random() * 4);
    //console.log(jugadaCPU);

    if(jugadaCPU == atacar){
        console.log('Se ha atacado al jugador');
    }
    else if(jugadaCPU == quemar){
        console.log('Se ha quemado al jugador');
        quemado = true;
    }
    else if(jugadaCPU == envenenar){
        console.log('Se ha envenenado al jugador');
        envenenado = true;
    }
    else if(jugadaCPU == fallar){
        console.log("Fallaste");
    }


    muestraEstadoJugador();
}