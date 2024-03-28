function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      if (i % 2 == 0 && j % 2 == 0) {
        fill(0, 255, 0); //verde
      } else if (i % 2 == 0) {
        fill(0, 0, 255);//azul
      } else {
        fill(255, 0, 0);//rojo
      }
      rect(30 * i, 30 * j, 20, 20);
    }
  }
}
