let fuente; // Paso 1: decalrar la variable que guarda mis fuentes
let tamano = 10;


function setup(){
  createCanvas(500, 300);
  fuente = loadFont("GothamBold.ttf"); // Paso 2: crear o "cargar" la fuente (nombre fuente)
  
}

function draw(){
  background(255);
  textFont(fuente, tamano); // Paso 3: especificar qué fuente usar. Puede ser distinto al inicial en el setup()
  fill(0); // Paso 4: especificar qué color
  text("Texto en P5!", 100,100); // Paso 5: Texto a dibujar (texto, posX, posY)
  
}