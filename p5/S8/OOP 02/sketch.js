//Declaramos un array de la clase "Modulo". Se hace igual que un array tradicional.
let modulos = [];

function setup() {
    createCanvas(512, 512); 

    //inicializamos todos los elementos (onjetos "modulo" en este caso) con la informacion que necesita
    for (let i = 0; i < 100; ++i) {
        //En este ejemplo, le pasamos solo valores random, pero esto se puede hacer en el orden que queramos
        modulos[i] = new Modulo(random(width), random(height), random(80), color(random(255)));  
    }
}

function draw() {
    background(255);

    //Invocamos el metodo dibuja() de cada objeto
    for (let i = 0; i < modulos.length; ++i) {
        modulos[i].dibuja();
    }
}

class Modulo {

    //Constructor
    constructor(posX, posY, tam, col){
       this.posX = posX;
       this.posY = posY;
       this.tam = tam;
       this.col = col;
   }

    //Metodos. En este caso, solo tenemos 1 que dibuja
    dibuja(){
        fill(this.col);
        ellipse(this.posX, this.posY, this.tam, this.tam);
    }

}