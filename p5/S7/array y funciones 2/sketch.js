let vel = 3;
let rot = 1;

const nFilas = 14;
const nColumnas = 14;

let angulos = [];
let velocidades = [];
let tamanos = [];
let colores = [];

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);

  //vamos a rellenar nuestros arrays;
  for (let i = 0; i < nFilas; ++i) {
    //para hacer un array bidimensinal con arrays, hay que hacerlo de esta manera
    //para cada elemento del array unidimensional, hay que crear un array dentro, quedanso asi de 2 dimensiones
    angulos[i] = [];
    velocidades[i] = [];
    colores[i] = [];
    tamanos[i] = [];

    //una vez creado, yapodemos acceder a los array dentro del los array
    for (let j = 0; j < nColumnas; ++j) {
      angulos[i][j] = random(360);
      velocidades[i][j] = random(-1, 1);
      colores[i][j] = color(random(255), 200, 100 + random(155));
      tamanos[i][j] = random(20, 40);
    }
  }
}

function draw() {
  background(255);

  //llamar a la funcion randomizar cada cierta cantidad de cuadros
  if (frameCount % 30 == 0) {
    randomizar();
  }

  for (let i = 0; i < velocidades[0].length; ++i) {
    for (let j = 0; j < velocidades[1].length; ++j) {
      let miRot = (angulos[i][j] += velocidades[i][j]);
      figura(60 * i, 60 * j, tamanos[i][j], miRot, colores[i][j]);
    }
  }
}

function figura(x, y, t, r, c) {
  push();
  translate(x, y);
  noStroke();
  fill(c / 3, 50);
  ellipse(0, 0, 50, 50);
  rotate(radians(r));
  fill(c);
  stroke(c * 3);
  rect(0, 0, t, t);
  fill(c * 2);
  ellipse(0, 0, 5, 5);
  rect(t / 2, 0, t / 4, t / 4);
  rect(-t / 2, 0, t / 4, t / 4);
  pop();
}

function mousePressed() {
  randomizar();
}

function randomizar() {
  //esta funcion es identico a lo que ponemos en el setup. 
  for (let i = 0; i < nFilas; ++i) {
    angulos[i] = [];
    velocidades[i] = [];
    colores[i] = [];
    tamanos[i] = [];

    for (let j = 0; j < nColumnas; ++j) {
      angulos[i][j] = random(360);
      velocidades[i][j] = random(-1, 1);
      colores[i][j] = color(random(255), 200, 100 + random(155));
      tamanos[i][j] = random(20, 40);
    }
  }
}
