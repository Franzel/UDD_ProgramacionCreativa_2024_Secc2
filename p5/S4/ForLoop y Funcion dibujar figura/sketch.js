function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  //dibujemos la figura 3 veces en ubicaciones cualquiera
  //miFigura(100,300);
  //miFigura(400,400);
  //miFigura(0,0);

  // dibujemos varias veces para el lado
  // for (let i = 0; i < 40; i++) {
  //   miFigura(50 * i, 20 * i);
  // }

  //dibujemos varias veces en filas y columnas
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      miFigura(30 * i, 30 * j);
    }
  }
}

function miFigura(centroX, centroY) {
  ellipse(centroX, centroY, 20, 20);
  stroke(255);
  line(centroX, centroY, centroX - 20, centroY - 20);
  line(centroX, centroY, centroX + 20, centroY - 20);
  line(centroX, centroY, centroX + 20, centroY + 20);
  line(centroX, centroY, centroX - 20, centroY + 20);
}
