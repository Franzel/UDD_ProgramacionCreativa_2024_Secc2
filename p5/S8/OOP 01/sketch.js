let modulo1;
let modulo2;

function setup() {
  
    createCanvas(512, 512); 
    modulo1 = new Modulo(100,100,30, color(255,0,0));
    modulo2 = new Modulo(200,50,180, color(255,255,0));
}

function draw() {
  
    background(255);
    modulo1.dibuja();
    modulo2.dibuja();
}

class Modulo {

   //Constructor
   constructor(posX,posY,tam,col){
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