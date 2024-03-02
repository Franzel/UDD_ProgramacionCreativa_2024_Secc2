function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (let i=0; i<100; i++) {
    stroke(3*i, 100,100);
    line(5*i, 0, 10*i, height);
  }
}