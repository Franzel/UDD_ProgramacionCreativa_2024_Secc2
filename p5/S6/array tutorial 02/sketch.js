let largos = [];
let colores = [];

function setup() {
  createCanvas(600, 500);
  for (let i=0; i<10; i++) {
    largos[i] = random(10, 400);
    colores[i] = color(random(255), random(255), 200);
  }
}

function draw() {
  background(0);
  for (let i=0; i<largos.length; i++) {
    fill(colores[i]);
    rect(0, i*32, largos[i], 25);
    fill(0);
    text(i, 5, 18+i*32);
  }
}