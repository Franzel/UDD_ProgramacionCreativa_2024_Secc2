let nElementos;

function setup() {
  background(0);
  createCanvas(500, 500);
  nElementos = 300;
}

function draw() {
  background(0);
  for (let i=0; i<nElementos; i++) {
    stroke(2*i);
    line(0, 5*i, width, 5*i);
  }
}
