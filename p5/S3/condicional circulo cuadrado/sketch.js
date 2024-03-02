function setup(){
  createCanvas(500,500);
  rectMode(CENTER);
}

function draw(){
  
  background(255);
  if(mouseIsPressed){
    ellipse(mouseX,mouseY,40,40);
  } else {
    rect(mouseX, mouseY, 50,50);
  }
}