//Este ejemplo lee información de un archivo de texto con numeros
//conocido como CSV (Comma separated values). El archivo debe tener la extension .csv
//El csv es comun por ejemplo en tablas que vienen de Excel o Google Sheets

let data = []; //declaramos un array que recibirá la información una vez transformada a ints
let numeros = [];

function preload() {
  // Cargar el archivo como un array de strings
  numeros = loadStrings("data.csv");
}

function setup() {
  createCanvas(500, 200);
  
  // convertir los strings a ints, usando la funcion split() y la coma
  // ver mas sobre split() en la documentacion de processing
  data = split(numeros[0], ',');
}

function draw() {
  background(255);
  stroke(0);
  for (let i = 0; i<data.length; i++) { 
    //usar la informacion guardada en el array para dibujar y pintar barras
    fill(data[i] * 10, 0, 0);
    rect(i*50,150, 20, -data[i]);
    text(data[i], i*50, 170);
  }
}