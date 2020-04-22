var canvas;
var ctx;
var fps = 50;

var anchoF = 40;
var altoF = 40;



var protagonista;

var tileMap;
var tileSoldiers;

var enemigo = [];

var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
    [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
    [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
    [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
    [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
    [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
    [0,2,2,2,0,0,2,0,0,0,1,0,0,2,0],
    [0,2,2,3,0,0,2,0,0,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]

//OBJETO ENEMIGO
var malo = function(x, y){
    this.x = x;
    this.y = y;
    this.direccion = Math.floor(Math.random()*4);
    this.fotograma = 0;
    this.maxfotograma = 50;
    this.dibuja = function(){
        ctx.drawImage(tileSoldiers, 3, 97, 32, 32, anchoF * this.x, altoF * this.y, anchoF, altoF);
    }

    this.fuera = function(x, y){
        if(escenario[y][x] == 0)
            return true;
        else
            return false;
    }

    
    this.mueve = function(){
        protagonista.colisionEnemigo(this.x, this.y);


        if(this.fotograma < this.maxfotograma)
            this.fotograma++;
        else{
            if(this.direccion == 0){
                if(!this.fuera(this.x, this.y - 1))
                    this.y--;
                else
                    this.direccion = Math.floor(Math.random()*4);
    
            }
            else if(this.direccion == 1){
                if(!this.fuera(this.x, this.y + 1))
                    this.y++;
                else
                    this.direccion = Math.floor(Math.random()*4);
            }
            else if(this.direccion == 2){
                if(!this.fuera(this.x - 1, this.y))
                    this.x--;
                else
                    this.direccion = Math.floor(Math.random()*4);
    
            }
            else if(this.direccion == 3){
                if(!this.fuera(this.x + 1, this.y))
                    this.x++;
                else
                    this.direccion = Math.floor(Math.random()*4);
            }
            this.fotograma = 0;
        }
        
    }

    

}




//OBJETO JUGADOR
var jugador = function(){
    this.x = 1;
    this.y = 1;
    this.color = "#ff5050";
    this.llave = false;
    this.frameAnimacion = 0;
    this.maxFrames = 6;
    this.fotograma = 0;
    this.maxfotograma = 5;


    this.logicaObjetos = function(){
        var objeto = escenario[this.y][this.x];
        if(objeto == 3){
            this.llave = true;
            escenario[this.y][this.x] = 2;
        }
        else if(objeto == 1){
            if(this.llave)
                this.victoria(true);
            else
                console.log("TE FALTA LA LLAVE");
        }
    }


    this.colisionEnemigo = function(x,y){
        if (this.x == x && this.y == y)
            this.victoria(false);
    }

    this.victoria = function(victoria){
        if(victoria)
            console.log("HAS GANADO");
        else
            console.log("HAS PERDIDO");
        this.x = 1;
        this.y = 1;
        this.llave = false;
        escenario[8][3] = 3;

    }

    this.dibuja = function(){
        ctx.drawImage(tileSoldiers, 3 + this.frameAnimacion + this.frameAnimacion * 32, 27, 32, 32, anchoF * this.x, altoF * this.y, anchoF, altoF);
        if(this.fotograma < this.maxfotograma)
            this.fotograma++;
        else{
            this.fotograma = 0;
            this.frameAnimacion++;
            if(this.frameAnimacion == this.maxFrames){
                this.frameAnimacion = 0;
            }

                
        }


        
    }

    this.fuera = function(x, y){
        if(escenario[y][x] == 0)
            return true;
        else
            return false;
    }

    this.arriba = function(){
        if(!this.fuera(this.x, this.y - 1)){
            this.y--;
            this.logicaObjetos();
        }
    }

    this.abajo = function(){
        if(!this.fuera(this.x, this.y + 1)){
            this.y++;
            this.logicaObjetos();
        }
            
    }
    this.derecha = function(){
        if(!this.fuera(this.x + 1, this.y)){
            this.x++;
            this.logicaObjetos();
        }
            
    }
    this.izquierda = function(){
        if(!this.fuera(this.x - 1, this.y)){
            this.x--;
            this.logicaObjetos();
        }
            
    }
}

function dibujaEscenario(){

    for(i=0; i < escenario.length; i++){
        for(j=0; j < escenario[i].length; j++){
            var tile = escenario[i][j];
            if(tile == 2)
                ctx.drawImage(tileMap, 238, 18, 16, 16, anchoF * j, altoF * i, anchoF, altoF);
            else if (tile == 0)
                ctx.drawImage(tileMap, 238, 35, 16, 16, anchoF * j, altoF * i, anchoF, altoF);

    

        }
    }
}


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    protagonista = new jugador();

    tileMap = new Image();
    tileMap.src = "img/tilemap.png";

    tileSoldiers = new Image();
    tileSoldiers.src = "img/soldier.png";

    enemigo.push(new malo(2, 3));
    enemigo.push(new malo(5, 2));
    enemigo.push(new malo(7, 7));

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

    for(i = 0; i < enemigo.length; i++){
        enemigo[i].mueve();
        enemigo[i].dibuja();
    }
        

}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}