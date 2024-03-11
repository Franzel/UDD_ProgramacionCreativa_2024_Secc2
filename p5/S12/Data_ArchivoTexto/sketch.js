//Este ejemplo lee información de un archivo de texto (.txt)
let lineas = [];


function preload() {
  lineas = loadStrings("mitexto.txt");
}

function setup() {
  createCanvas(512, 512);
  console.log("El texto tiene " + lineas.length + " lineas.");
  
}

function draw() {
  background(0);
  for(let i=0 ; i<5 ; i++){
    fill(255);
    text(lineas[i], 100, 100 + 30*i); 
  }
}