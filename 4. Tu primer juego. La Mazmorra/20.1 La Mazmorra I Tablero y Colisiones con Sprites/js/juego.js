var canvas;
var ctx;
var fps = 50;

var anchoF = 40;
var altoF = 40;

var muro = "#006600";

var tierra = "#996633";

var protagonista;

var imgGrass;
var imgForest;



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
                ctx.drawImage(imgForest, j*anchoF, i*altoF);
            else if (escenario[i][j] == 2){
                ctx.drawImage(imgGrass, j*anchoF, i*altoF);
            }
            
                
            


        }
    }
}


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    protagonista = new jugador();

    imgGrass = new Image();
    imgGrass.src = "img/grass.png";

    imgForest = new Image();
    imgForest.src = "img/forest1.png";


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