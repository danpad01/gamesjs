var miCanvas;

function inicializar(){
    miCanvas = document.getElementById("canvas");

    miCanvas.addEventListener("mousedown",clicRaton, false);
    miCanvas.addEventListener("mouseup",sueltaRaton, false);
    miCanvas.addEventListener("mousemove",posicionRaton, false);
}

function posicionRaton(e){
    var x = e.pageX;
    var y = e.pageY;
    console.log("(" + x + ", " + y + ")");
}


function sueltaRaton(e){
    console.log("Raton liberado");
}

function clicRaton(e){
    console.log("Pulsado raton");
}