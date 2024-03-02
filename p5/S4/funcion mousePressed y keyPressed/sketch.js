let huboClick = false;
let miColor;


function setup() {
  createCanvas(500, 500);
  miColor = color(255);
}

function draw() {
  background(0);
  
  fill(miColor);
  if (huboClick == true) {
    circle(width/2, height/2, 100);
  }
}

function mousePressed() {
  //huboClick=true;
  huboClick = !huboClick;
}

function keyPressed() {

  if (key == 'a') {
    miColor = color(255, 0, 0);
  }

  if (key == 's') {
    miColor = color(255, 255, 0);
  }

  if (key == 'd') {
    miColor = color(0, 255, 255);
  }
}