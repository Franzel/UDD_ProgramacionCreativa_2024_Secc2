let miColor;


function setup() {
  createCanvas(500, 500);
  tam = 100;
  miColor = color(0);
}
function draw() {
  background(255);
  fill(miColor);
  ellipse(width/2, height/2, tam, tam);
}

function mousePressed() {
  miColor = color(255, 0, 0);
}

function mouseDragged() {
  miColor = color(0, 255, 0);
}

function keyPressed() {
  if (key == 'a') {
    miColor = color(0, 0, 255);
  }
  if (key == 's') {
    miColor = color(255, 255, 0);
  }
}