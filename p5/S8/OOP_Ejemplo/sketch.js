//PASO 1: crear el array de objetos de la clase "Modulo"
misAnillos = [];


function setup() {
  createCanvas(800, 400);
  //PASO 2: rellenar el array con objetos de la clase Modulo
  for (let i=0; i<20; i++) {
    misAnillos[i] = [];
    for (let j=0; j< 17; j++) {
      misAnillos[i][j] = new Modulo(color(0, random(255), random(255), 40), 35*i, 35*j, 20, round(random(2, 6)));
    }
  }
}

function draw() {
  background(255);

  //PASO 3: llamamos a los metodos de cada objeto que estan guardados en el array
  for (let i=0; i<20; i++) {
    for (let j=0; j< 17; j++) {

      //misAnillos[i][j].col = color(255, 0, 0, 40);

      //let d = dist(mouseX, mouseY, misAnillos[i][j].posX, misAnillos[i][j].posY);
      //if (d<15) {
      //  misAnillos[i][j].tam = 50;
      //}
      //misAnillos[i][j].tam = 10;
      // misAnillos[i][j].nRepeticiones = 5;
      misAnillos[i][j].dibuja();

      // misAnillos[i][j].tirita(random(5));
    }
  }
}

function mouseDragged() {
  for (let i=0; i<20; i++) {
    for (let j=0; j< 17; j++) {
      let d = dist(mouseX, mouseY, misAnillos[i][j].posX, misAnillos[i][j].posY);
      if (d<15) {
        misAnillos[i][j].tam = 50;
      }
    }
  }
}

//clase basica
class Modulo {

  //constructor
  constructor(c, x, y, t, n) {
    this.posX = x;
    this.posY = y;
    this.tam = t;
    this.col = c; //aca asigno "c" (que viene desde fuera) a "col", que es mi variable de la clase
    this.nRepeticiones = n;
  }

  //metodos
  dibuja() {
    noFill();
    //noStroke();
    fill(this.col); //aca ocupo mi variable col
    for(let i=0; i < this.nRepeticiones ; i++){
      ellipse(this.posX, this.posY, this.tam/4 *i , this.tam/4 *i );
    }
  }
  
  tirita(a) {
    this.posX += random(-a, a);
  }
}