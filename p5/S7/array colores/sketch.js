/*
En este ejemplo usamos un array para guardar 3 colores
 A los cuales accedemos en el draw a través de la condicional de mousePressed
 */

let colorFondo;
let colores;
let index = 0;


function setup() {
  
  colorFondo = color(0, 0, 0);
  colores = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255,255,0)];
  
  createCanvas(500, 500);
  background(colorFondo);
}

function draw() {
  if (mouseIsPressed) {
    print(index);
    fill(colores[index]); //accedemos al elemento del array usando "index" 
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function mousePressed() {
  index ++;//cuando apretamos el mouse "index" se incrementa
  if (index>=colores.length) { //si es mayor al numero de elementos del array...
    index = 0; //vuelve a cero, es decir hacemos un ciclo
  }
}