function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(255,0,0);
    ellipse(mouseX, mouseY, 30,30);
  }else{
    fill(0,255,0);
    rect(mouseX, mouseY, 10, 10);
  }
}