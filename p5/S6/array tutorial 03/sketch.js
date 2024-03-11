let nElementos = 15;
let largos = [];
let colores = [];
let alto = 20;

function setup() {
  createCanvas(600, 500);
  
  for (let i=0; i<nElementos; i++) {
    largos[i] = random(10, 400);
    colores[i] = color(random(255), random(255), 200);
  }
}

function draw() {
  background(0);
  for (let i=0; i<largos.length; i++) {
    fill(colores[i]);
    rect(0, i*(alto + alto/2), largos[i], alto);
    fill(0);
    text(i, 5, 18+i*(alto + alto/2));
  }
}

function keyPressed() {
  if (key=='r') {
    randomizar();
  }
}

function randomizar() {
  for (let i=0; i<largos.length; i++) {
    largos[i] = random(10, 400);
  }
}