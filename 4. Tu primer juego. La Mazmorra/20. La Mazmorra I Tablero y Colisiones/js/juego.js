var canvas;
var ctx;
var fps = 50;

var anchoF = 50;
var altoF = 50;

var muro = "#006600";
var puerta = "#0099cc";
var tierra = "#996633";
var llave = "#ffff00";
var protagonista;





var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
    [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
    [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
    [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
    [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
    [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
    [0,2,2,2,0,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,0,0,2,0,0,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]

//OBJETO JUGADOR
var jugador = function(){
    this.x = 1;
    this.y = 1;
    this.color = "#ff5050";

    this.dibuja = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x*anchoF, this.y*altoF, anchoF, altoF);
    }

    this.fuera = function(x, y){
        if(escenario[y][x] == 0)
            return true;
        else
            return false;
    }

    this.arriba = function(){
        if(!this.fuera(this.x, this.y - 1))
            this.y--;
    }

    this.abajo = function(){
        if(!this.fuera(this.x, this.y + 1))
            this.y++;
    }
    this.derecha = function(){
        if(!this.fuera(this.x + 1, this.y))
            this.x++;
    }
    this.izquierda = function(){
        if(!this.fuera(this.x - 1, this.y))
            this.x--;
    }
}

function dibujaEscenario(){
    var color;
    for(i=0; i < escenario.length; i++){
        for(j=0; j < escenario[i].length; j++){
            if(escenario[i][j] == 0)
                color = muro;
            else if (escenario[i][j] == 1)
                color = puerta;
            else if (escenario[i][j] == 2)
                color = tierra;
            else if (escenario[i][j] == 3)
                color = llave;
            

            ctx.fillStyle = color;
            ctx.fillRect(j*anchoF, i*altoF, anchoF, altoF);
        }
    }
}


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    protagonista = new jugador();



    document.addEventListener("keydown", function(tecla){
        if(tecla.keyCode == 38){
            protagonista.arriba();
        }
        else if(tecla.keyCode == 40){
            protagonista.abajo();
        }
        else if(tecla.keyCode == 37){
            protagonista.izquierda();
        }
        else if(tecla.keyCode == 39){
            protagonista.derecha();
        }
    });

    setInterval(function(){
        principal();
    }, 1000/fps);

}




function principal(){
    dibujaEscenario();
    protagonista.dibuja();

}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}