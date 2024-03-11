function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  //hacemos un doble for loop para dibujar "en grilla"
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let distancia = dist(mouseX, mouseY, 100 * i, 100 * j);
      let distanciaMapped = map(distancia, 0, 1000, 1, 0);
      //llamamos a nuestra funcion, y posicionamos cada unidad en su propio lugar
      dibujaCruz(100 * i, 100 * j, 60, distanciaMapped);
    }
  }
}

function dibujaCruz(centroX, centroY, t, d) {
  push();
  translate(centroX, centroY);
  rotate(radians(mouseX/2)*d);
  circle(0, 0, t * d);
  stroke(255);
  line(0, -t/2 * d, 0, -t * d);
  line(t/2 * d, 0, t * d, 0);
  line(0, t/2 * d, 0, t * d);
  line(-t/2 * d, 0, -t * d, 0);
  pop();
}
