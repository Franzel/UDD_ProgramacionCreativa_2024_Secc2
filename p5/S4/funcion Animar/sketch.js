let posX, posY;  //variables para posicion
let s;  // variable para tamaño

function setup() {
  createCanvas(300, 300);

  //inicializamos las variables
  posX = width/2;
  posY = height/2;
  s = 30;
}

function draw() {
  background(255);
  
  //Si apretamos mouse, llamamos a la función tirita
  if (mouseIsPressed) {
    tirita();
  }
  //Luego dibujamos la elipse
  ellipse(posX, posY, s, s);
}

function tirita() {
  // Desde el draw() llamamos a esta función
  // Esta función lo unico que hace es sumar un poco de random a posX y posY
  posX += random(-10, 10);
  posY += random(-10, 10);
}