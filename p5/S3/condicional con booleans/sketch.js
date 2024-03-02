let cuadrao; // creamos una variable tipo boolean

function setup() {
  createCanvas(400, 200);
  rectMode(CENTER);
  cuadrao = true; // asignamos valor inicial
}
function draw() {
  background(255);
  print("boolean cuadrao es: " + cuadrao + " --- Entonces ");

  if (cuadrao == true) {
    // haz una cosa
    print("SOY un cuadrado");
    fill(100,100,100);
    rect(width/2, height/2, 50, 50);
  } else {
    // haz otra cosa
    print("NO SOY un cuadrado");
    fill(200,200,200);
    ellipse(width/2, height/2, 50, 50);
  }
}

function mousePressed() {
  // el simbolo "!" significa "opuesto a"
  // es decir, si es verdadero, le asigna falso
  // y si es falso, le asigna verdadero
  cuadrao = !cuadrao;
}