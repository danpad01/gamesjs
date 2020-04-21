var personaje = function(x, y, nombre){
    this.x = x;
    this.y = y;
    this.nombre = nombre;


    //METODO ABAJO
    this.abajo = function(){
        this.y += 10;
    }

    //METODO "HABLAR"
    this.hablar = function(){
        console.log(nombre + " esta hablando");
    }
}

var personaje1 = new personaje(10, 100, "Link");
var personaje2 = new personaje(220, 380, "Zelda");

personaje1.abajo();
