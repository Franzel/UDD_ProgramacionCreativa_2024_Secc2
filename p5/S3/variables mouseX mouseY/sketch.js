function setup(){
  createCanvas(500,500);
}

function draw(){
  background(255);
  print(mouseX);
  fill(mouseX/2,mouseY/2,mouseX/2);
  ellipse(mouseX, mouseY, mouseX,mouseY);
}