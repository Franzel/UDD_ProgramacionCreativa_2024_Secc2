
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  let col = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      
      if (i % 2 == 0 && j % 2 == 0) {
        col = color(255, 0, 200);
      } else {
        col = color(100,200,0);
      }

      miFigura(i * 30, j * 30, i*45 + j*45, 20,col );
    }
  }
}

function miFigura(x, y, r, t, c) {
  push();
  translate(x, y);
  rotate(radians(r));
  fill(c);
  rect(0, 0, t);
  pop();
}