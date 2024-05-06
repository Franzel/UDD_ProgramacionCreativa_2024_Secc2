function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  textSize(14);
  fill(0);
  textAlign(LEFT);
  let t = "texto en varias y multiples lineas";
  //para caja de texto, simplemente agregar el tamaño de la caja luego de la posición
  text(t, 100,100, 80, 100); 
}