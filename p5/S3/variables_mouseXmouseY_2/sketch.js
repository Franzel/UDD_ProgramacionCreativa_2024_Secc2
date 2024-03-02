function setup() {
  createCanvas(600,600);
}

function draw() {
  background(255);
  print(mouseX);
  fill(mouseX/2,mouseY/2,mouseX/2);
  ellipse(mouseX, mouseY, mouseX,mouseY);
}
