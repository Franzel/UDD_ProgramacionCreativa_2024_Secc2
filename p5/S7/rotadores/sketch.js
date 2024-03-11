let nCols = 60;
let nFilas = 60;
let angulos = [];
let velocidades = [];
let selector;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  selector = 0;

  for (let i = 0; i < nCols; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    
    for (let j = 0; j < nFilas; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.5,0.5);
    }
  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < angulos.length; i++) {
    for (let j = 0; j < angulos[1].length; j++) {
      angulos[i][j] += velocidades[i][j];
      rotador(15 * i, 15*j, angulos[i][j] + velocidades[i][j], 10);
    }
  }
}

function rotador( x,  y,  a,  s) {
  push();
  translate(x, y);
  rotate(radians(a));

  if(selector==1){
    stroke(255);
    line(0, 0, 0, -(s/3)*2);
  } else if (selector==2) {
    stroke(255);
    line(0, (s/3)*2, 0, -(s/3)*2);
    line((s/3)*2, 0, -(s/3)*2, 0);
  } else{
    rect(0, 0, s, s);  
  } 
  pop();
}

function keyPressed(){
  if (key=='a') {
    selector=0;
  } else if (key=='s') {
    selector=1;
  } else if (key=='d') {
    selector=2;  
  } else{
    selector=0;
  }

  
}