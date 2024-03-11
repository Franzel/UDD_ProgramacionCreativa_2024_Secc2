let vel;
let posX;
let posY;
let sizeX, sizeY;

let radius;

function setup() {
  createCanvas(800, 300);

  posX = width/2;
  posY = height/2;
  sizeX = 100;
  sizeY = 100;
  radius = 100;

  noStroke();
}

function draw() {
  background(0);

  posX = width/2 + sin(frameCount*0.1)*radius;

  fill(255);
  ellipse(posX, posY, sizeX, sizeY);
}