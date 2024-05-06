let fuente; // Paso 1: decalrar la variable que guarda mi fuente
let tamano = 18;
let miTexto1, miTexto2;

function setup() {
  createCanvas(500, 300);
  fuente = loadFont("GothamBold.ttf"); 
  miTexto1 = "Texto laaaaaaaaaaaaaaaaaaaargo";
  miTexto2 = "Texto corto";
}

function draw() {
  background(255);
  fill(0); // Paso 4: especificar qué color
  textFont(fuente, 18);       

  fill(0);
  text(miTexto1, 100, 60);
  let ancho1 = textWidth(miTexto1); //acá podemos obtener el largo de nuestro texto
  fill(255, 0, 0);
  rect(100, 60, ancho1, 18); //y usarlo para otra cosa
  
  fill(0);
  text(miTexto2, 100, 120);
  let ancho2 = textWidth(miTexto2);
  fill(255, 0, 0);
  rect(100, 120, ancho2, 18);
}