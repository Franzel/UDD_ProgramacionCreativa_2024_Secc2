let col;// variable que usaremos para el color

function setup() {
  createCanvas(500, 500); 
  col = 0; // inicializamos variable
}

function draw() {
  background(col); //usamos la variable "col" para background
}

function keyPressed() {
  //si aprieto "a" col es un color random
    if (key=='a') { 
    col = color(random(255), random(255), random(255));
  }
  
  //si aprieto "s" col vale 0
  if (key=='s') {
    col=color(0);
  }
  
}