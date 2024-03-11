/*
Ejemplo Push-Pop Matrix
Francisco Zamorano, 2023
*/

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(255);

  //Ahora que ya sabemos como rotar, hagámos un poco de FOR LOOP FUN!
  
  //En cada vuelta del loop rotaremos un poco, y haremos que cada cuadrado se vaya achicando
  for (let i=0; i<15; i++) {
    push();
    translate(width/2, height/2); 
    rotate(radians(30*i)); 
    fill(255,0,0);
    rect(0, 0, 300-20*i, 300-20*i); 
    pop();
  }
}