let posX;
let posY;
let s;

function setup() {
  s = 100;
  posX = 0;
  posY = 100;
  createCanvas(400, 400);
  background(255);
  print("hola mundo");
}

function draw() {
  fill(255, 0, 0); //fill sirve para dar color al relleno
  noStroke();
  
  rect(width/2 - s/2, height/2 - s/2, s, s);
  rect(width/2 - s/2.4, height/2.4 - s/2, s, s);
  
  fill(0,255,255);
  ellipse(width/2, height/2, s, s);
}