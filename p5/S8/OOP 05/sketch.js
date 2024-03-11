//Declaramos un array de la clase "Modulo". Se hace igual que un array tradicional.
let modulos = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  // //inicializamos todos los elementos (onjetos "modulo" en este caso) con la informacion que necesita
  // for (let i = 0; i < 20; ++i) {
  //   modulos[i] = [];
  //     for (let j = 0; j < 20; ++j) {
  //         //Eneste ejemplo, le pasamos solo valores random, pero esto se puede hacer en el orden que queramos
  //         modulos[i][j] = new Modulo(random(width), random(height), random(10,30), color(random(255), 100, 200, 50), floor(random(1, 5)));
  //     }
  // }

  //Este for loop bidimiensional los ordena en grilla. Apagar el de arriba al prender este para verlo mejor
  for (let i = 0; i < 20; ++i) {
    modulos[i] = [];
    for (let j = 0; j < 20; ++j) {
      //En este ejemplo, le pasamos solo valores random, pero esto se puede hacer en el orden que queramos
      modulos[i][j] = new Modulo(
        60 * i,
        60 * j,
        65,
        color(random(255), 65, 100, 200),
        floor(random(1, 10))
      );
      // modulos[i][j].vel = random( - 2,2);
    }
  }
}

function draw() {
  background(255);

  //Invocamos el metodo dibuja() de cada objeto
  for (let i = 0; i < modulos[0].length; ++i) {
    for (let j = 0; j < modulos[1].length; ++j) {
      modulos[i][j].dibuja();
      modulos[i][j].rota();
      //modulos[i][j].tirita();
      //modulos[i][j].col = color(255,0,200,50); tambi'en podemos cambiar una variable dentro de cada objeto, anteponiendo un punto "."
    }
  }
}

function mousePressed() {
  //randomizar la velocidad de cada objeto al apretar el mouse dentro de ellos
  for (let i = 0; i < modulos[0].length; ++i) {
    for (let j = 0; j < modulos[1].length; ++j) {
      if (dist(modulos[i][j].posX, modulos[i][j].posY, mouseX, mouseY) < 15) {
        modulos[i][j].vel += 0.1;
      }
    }
  }
}

//CLASE BASICA

class Modulo {
  //Constructor
  constructor(x, y, t, c, n) {
    this.posX = x;
    this.posY = y;
    this.tam = t;
    this.col = c;
    this.nRepeticiones = n;
    this.rot = 0;
    this.vel = 0;
  }

  //Metodos. En este caso, solo tenemos 1 que dibuja
  dibuja() {
    fill(this.col);
    stroke(this.col);
    noFill();
    //Aca usamos la variable int "nRepeticiones" para la cantidad de vueltas del for loop.
    //Entonces cada objeto va a dibujar una cantidad de repeticiones dada por lo que venga del sketch principal
    for (let i = 0; i < this.nRepeticiones; ++i) {
      push();
      translate(this.posX, this.posY);
      rotate(radians(30 * i + this.rot));
      rect(0, 0, this.tam / 4 + 3 * i, this.tam / 4 + 3 * i);
      pop();
    }
  }

  //Aca inventamos otro metodo. Este hace que la posX tirite cuadro a cuadro.
  tirita() {
    this.posX += random(-1, 1);
  }

  rota() {
    
    this.rot += this.vel;
  }
}
