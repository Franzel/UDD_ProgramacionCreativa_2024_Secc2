let anchoCanvas = 800;
let altoBarra = 100;
let anchoBarra = 6;
let espacio = 4;
let nElementos = anchoCanvas / (anchoBarra+espacio);
let velocidades = [];
let posicionesY = [];
let colores = [];

function setup() {
  createCanvas(anchoCanvas, anchoCanvas);
  colorMode(HSB, 250, 100, 100);
  rectMode(CENTER);

  for (let i=0; i<nElementos; i++) {
    velocidades[i] = random (-1, 1);
    posicionesY[i] = height/2;
    //valores[i] = random(height);
    colores[i] = color(i, 100, 100);
  }
}

function draw() {
  background(0);
  for (let i=0; i<velocidades.length; i++) {
    if (posicionesY[i]>height - (altoBarra/2) || posicionesY[i]<altoBarra/2) {
      velocidades[i] *=  -1 ;
    }

    fill(colores[i]);
    posicionesY[i] += velocidades[i];
    rect((anchoBarra+espacio)*i, posicionesY[i], anchoBarra, altoBarra, 10);
  }
}