function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  for (let i = 0; i < 36; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(10 * i);
    figura(100, 0, 10);
    pop();
  }
}

function figura(x, y, t) {
  fill(255);
  circle(x, y, t);
  stroke(255);
  line(x, y, x + t * 1.5, y);
}
