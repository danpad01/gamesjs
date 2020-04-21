var canvas;
var ctx;
var fps = 50;




function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");



    setInterval(function(){
        principal();
    }, 1000/fps);
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

var per1 = new personaje(10, 50);
var per2 = new personaje(10, 120);
var per3 = new personaje(10, 230);



function principal(){
    borraCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();




    per1.mueve(1);
    per2.mueve(10);
    per3.mueve(15);

}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}