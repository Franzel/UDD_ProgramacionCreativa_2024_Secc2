let miFuente; 
let tamano = 18;


function setup() {
  createCanvas(500, 300);
  miFuente = loadFont("GothamBold.ttf"); 
}

function draw() {
  background(255);
  
  textFont(miFuente);
  fill(0); // Paso 4: especificar qué color

  stroke(175);
  line(width/2, 0, width/2, height);

  textFont(miFuente);       
  fill(0);

  textAlign(CENTER);
  text("Texto centrado", width/2, 60); 

  textAlign(LEFT);
  text("Texto alineado izquierda", width/2, 100); 

  textAlign(RIGHT);
  text("Texto alineado derecha", width/2, 140);
}