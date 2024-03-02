let col;// variable que usaremos para el color
//noprotect
let espacio;

function setup() {
  createCanvas(800, 800);
  espacio = 20;
}

function draw() {
  background (250, 50, 250);
  
  //For loop biDimensional
  for (let i=0; i<width; i++) {
    for (let j=0; j<height; j++) {
      rect(espacio * i, espacio * j, 10, 10);
    }
  }
}