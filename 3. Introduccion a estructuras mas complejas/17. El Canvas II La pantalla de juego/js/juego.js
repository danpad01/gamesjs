var canvas;
var ctx;
var fps = 50;

var imgRex;





document.addEventListener("keydown", function(tecla){
    if(tecla.keyCode == 38){
        prota.arriba();
    }
    else if(tecla.keyCode == 40){
        prota.abajo();
    }
    else if(tecla.keyCode == 37){
        prota.izquierda();
    }
    else if(tecla.keyCode == 39){
        prota.derecha();
    }

    
})


var protagonista = function(x, y){
    this.x = x;
    this.y = y;
    this.velocidad = 3;
    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y);
    }


    this.texto = function(){
        ctx.font = "30px impact";
        ctx.fillStyle = "#555555";
        ctx.fillText("X: " + this.x, 100, 100);
    }

    this.arriba = function(){
        this.y -= this.velocidad;
    }

    this.abajo = function(){
        this.y += this.velocidad;
    }

    this.derecha = function(){
        this.x += this.velocidad;
    }

    this.izquierda = function(){
        this.x -= this.velocidad;
    }



}


var personaje = function(x, y){
    this.x = x;
    this.y = y;
    this.derecha = true;

    this.dibuja = function(){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 50, 50);
    }



    this.mueve = function(velocidad){
        if(this.derecha){
            if(this.x < 450)
                this.x += velocidad;
            else
                this.derecha = false;
        }
        else{
            if(this.x > 0)
                this.x -= velocidad;
            else
                this.derecha = true;
        }
        
    }
}


function principal(){
    borraCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();
    prota.dibuja();
    prota.texto();
    per1.mueve(1);
    per2.mueve(10);
    per3.mueve(15);

}




function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    imgRex = new Image();
    imgRex.src = "img/idle.png";

    setInterval(function(){
        principal();
    }, 1000/fps);
}



function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}

var per1 = new personaje(10, 50);
var per2 = new personaje(10, 120);
var per3 = new personaje(10, 230);
var prota = new protagonista(200, 200);