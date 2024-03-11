let vel;
let posX;
let posY;
let sizes;

let radius;

function setup() {
  createCanvas(500, 800);

  posX = width/2;
  posY = 100;
  sizes = 100;
  radius = 100;

  noStroke();
}

function draw() {
  background(0);
  for (let i=0; i<400; i++) {
    posX = width/2 + sin(frameCount*0.05 + 0.1*i)*radius/2;
    fill(  127 + 127 * sin(frameCount*0.05 + 0.5*i),
           127 + 127 * sin(frameCount*0.05 + 0.11*i),
           127 + 127 * sin(frameCount*0.05 + 0.12*i));
    ellipse(posX, posY + 5*i, sizes/2 + sizes/4*sin(frameCount*0.05 + 0.12*i), sizes/2 + sizes/4*sin(frameCount*0.05 + 0.12*i));
  }
}