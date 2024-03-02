let tamX;
let tamY;

function setup() {
  createCanvas(500, 500);
  tamX = 0;
  tamY = 0;
}

function draw() {
  tamX = tamX +1;
  tamY = tamY +2;
  
  fill(tamX, tamY, 0);
  ellipse(200,200, tamX, tamY);
}