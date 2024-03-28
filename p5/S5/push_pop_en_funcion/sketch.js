let giro;
function setup() {
  createCanvas(400, 400);
  giro = 0;
}

function draw() {
  background(220);
  //giro++;
  if(keyIsPressed){
    giro++;
  }
  miFigura(100, 100, giro, 30, color(255, 0, 0));
  miFigura(250, 300, giro * 5, 88, color(255, 255, 0));
}

function miFigura(x, y, r, t, c) {
  push();
  translate(x, y);
  rotate(radians(r));
  fill(c);
  rect(0, 0, t);
  pop();
}
