let selectColor;
let paleta = [];
let misColores = [];

function setup() {
  
  createCanvas(500, 500);

  paleta[0] = color(255, 0, 0);
  paleta[1] = color(0,255, 0);
  paleta[2] = color(0, 0, 255);
  paleta[3] = color(50, 50, 0);
  
  for (let i = 0; i < 10; i++ ) {
    misColores[i] = [];
    for (let j = 0; j<10; j++) {
    misColores[i][j] = paleta [round(random(3))];
    }
  }
  
  rectMode(CENTER);
}

function draw() {
  background(255);
  
  if(frameCount%15==0){
      eligeColor();
  }

  for (let i = 0; i < 10; i++ ) {
    for (let j = 0; j<10; j++) {
      fill(misColores[i][j]);
      figura(i*60, j*60, 80);
    }
  }
}

function figura(posX, posY, tam) {
  ellipse(posX, posY, tam/2, tam/2);
}

function eligeColor() {
  for (let i = 0; i < 10; i++ ) {
    misColores[i] = [];
    for (let j = 0; j<10; j++) {
    misColores[i][j] = paleta [round(random(3))];
    }
  }
}