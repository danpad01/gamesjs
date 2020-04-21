var canvas;
var ctx;
var fps = 50;

var anchoF = 50;
var altoF = 50;

var cesped = "#00cc00";
var agua = "#0066cc";
var tierra = "#663300";

var escenario = [
    [1, 0, 1, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 2, 0, 0],
    [0, 2, 0, 2, 0],
    [1, 0, 2, 0, 0]

];


function dibujaEscenario(){
    var color;
    for(i=0; i < escenario.length; i++){
        for(j=0; j < escenario[i].length; j++){
            if(escenario[i][j] == 0)
                color = cesped;
            else if (escenario[i][j] == 1)
                color = agua;
            else if (escenario[i][j] == 2)
                color = tierra;
            

            ctx.fillStyle = color;
            ctx.fillRect(j*anchoF, i*altoF, anchoF, altoF);
        }
    }
}


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    setInterval(function(){
        principal();
    }, 1000/fps);

}




function principal(){
    dibujaEscenario();

}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}