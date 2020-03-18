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

var pocion = 0;
var colaFenix = 1;
var pocionQuemaduras = 2;
var pocionVeneno = 3;


function muestraEstadoJugador(){
    if(vivo){
        console.log("Vida: " + vida);
        if(envenenado){
            console.log('Envenenado');
        }

        if(quemado){
            console.log('Quemado');
        }

    }
    else{
        console.log("Estas muerto");
    }
    
}

function usarItem(objeto){
    if(objeto == pocion){
        vida += 50;
    }
    else if(objeto == colaFenix){
        if(!vivo){
            vivo = true;
            vida = 30;
        }
    }
    else if(objeto == pocionQuemaduras){
        quemado = false;
    }
    else if(objeto == pocionVeneno){
        envenenado = false;
    }
        
    muestraEstadoJugador();
}

function juegaTurno(){
    var jugadaCPU = Math.floor(Math.random() * 4);
    //console.log(jugadaCPU);

    if(vida <= 0){
        vivo = false;
    }

    if(vivo){
        if(jugadaCPU == atacar){
            vida -= 10;
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
       
    }
    muestraEstadoJugador();

}