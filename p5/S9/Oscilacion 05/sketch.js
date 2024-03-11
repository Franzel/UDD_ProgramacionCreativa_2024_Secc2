let posX;
let posY;
let sizeX, sizeY;
let vel;

let radio;

function setup() {
  createCanvas(600, 600);
  background(0);

  posX  = width/2;
  posY  = height/2;
  sizeX = 50;
  sizeY = 50;
  radio = 200;
  noStroke();
  
  colorMode(HSB, 360, 100, 100);
}



function draw() {
  //background(27);

  vel  = frameCount*0.05;
  let oscilacion = 180 + sin(vel)*180;
  
  posX = width/2  + sin(vel)*radio;
  posY = height/2 + cos(vel)*radio;
  sizeX  += sin(vel)*3;
  sizeY  += sin(vel)*3;
  
  fill(180 + sin(vel)*180, 70+cos(vel)*30, 90+cos(vel)*10);
  ellipse(posX, posY, sizeX, sizeY);
  
  print(posX + " , " + oscilacion);
}