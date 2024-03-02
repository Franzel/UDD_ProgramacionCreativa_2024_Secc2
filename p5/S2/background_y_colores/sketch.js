function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255); //color de fondo
  fill(255, 0, 0); //color de relleno
  stroke(255); //color de linea  
  strokeWeight(5); //ancho de línea
  rect(100, 100, 100, 100); //rectangulo
  ellipse(150, 150, 100, 100); //elipse
  console.log("hello");
}
