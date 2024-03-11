let vel = 3;
let rot = 1;
let nElementos = 12;

let angulos = [];
let velocidades = [];
let tamanos = [];
let colores = [];


function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);

  //vamos a rellenar nuestros arrays;
  for (let i = 0; i < nElementos; ++i) {
    angulos[i] = random(360);
    velocidades[i] = random(-1, 1);
    colores[i] = color(random(255), 200, 100 + random(155));
    tamanos[i] = random(20, 40);
  }
}

function draw() {
  background(255);
    for (let i = 0; i < nElementos; ++i) {
        push();
        translate(width/2, height/2);
        rotate(radians(30*i));
        let miRot = angulos[i] += velocidades[i];
        figura(100, 0, tamanos[i], miRot, colores[i]);
        pop();
        
    }
}

function figura(x, y, t, r, c) {
  push();
  translate(x, y);
  fill(c/3, 50);
  rotate(radians(r));
  fill(c);
  rect(0, 0, t, t);
  fill(c*2);
  ellipse(0, 0, 5, 5);
  rect(t / 2, 0, t / 4, t / 4);
  rect(- t / 2, 0, t / 4, t / 4);
  pop();
}

function mousePressed() {
  randomizar();
}

function randomizar() {
  for (let i = 0; i < nElementos; ++i) {
    angulos[i] = random(360);
    velocidades[i] = random(-1, 1);
    colores[i] = color(random(255), 200, 100 + random(155));
    tamanos[i] = random(20, 40);
  }
  
}