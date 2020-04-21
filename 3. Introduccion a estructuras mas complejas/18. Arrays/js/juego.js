function inicializa(){

}

var mochila = [];

mochila.push("A");
mochila.push("B");
mochila.push("C");
mochila.push("D");
mochila.push("E");

function vender(){
    mochila.splice(2,1);
}

function muestraInventario(){
    for(i = 0; i < mochila.length; i++){
        console.log(mochila[i]);
    }

    
}
