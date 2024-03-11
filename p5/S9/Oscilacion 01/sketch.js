let vel;
let posX;
let posY;
let sizeX, sizeY;

function setup() {
  createCanvas(800, 300);
  background(0);
  posX = width/2;
  posY = height/2;
  sizeX = 100;
  sizeY = 100;
  noStroke();
}

function draw() {
  fill(255);
  ellipse(posX, posY, sizeX, sizeY);
}