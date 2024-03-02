let c;
let s;

function setup() {
  createCanvas(500, 500);
  c = 0;
  s = 200;
}

function draw() {
  background(160,220,250);
  fill(c);
  ellipse(300, 300, s, s);
}

function keyPressed() {
  if(key == 'a'){
    c = 255;
    s=300;
  }
  if(key == 's'){
    c = 100;
    s = 100;
  }
}