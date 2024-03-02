function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noFill();
  for(let i=0; i<100; i++){
    strokeWeight(2);
    stroke(255,30*i, 10*i);
    ellipse(250, 250, 20*i , 20*i);
  }  
}