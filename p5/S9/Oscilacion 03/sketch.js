let posX;
let posY;
let sizeX, sizeY;
let vel;

let radio;

function setup() {
  createCanvas(600, 600);

  posX  = width/2;
  posY  = height/2;
  sizeX = 100;
  sizeY = 100;
  radio = 200;
  //noStroke();
}

function draw() {
  //background(0);
  
  vel  = frameCount*0.02;
  posX = width/2  + sin(vel)*radio;
  posY = height/2 + cos(vel)*radio;

  fill(255);
  ellipse(posX, posY, sizeX, sizeY);
}