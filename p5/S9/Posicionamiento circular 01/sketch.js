//Este codigo posiciona elementos alrededor de un centro

let angle; //separacion (en grados o radianes) entre cada elemento
let radio; //que tan lejos del centro de la circunferencia 
let nElementos; //numero total de elementos
let s; //para el tamano de los elementos
let origenX, origenY; //para determinar donde esta el centro de la circunferencia

function setup(){
  createCanvas(500,500);
  nElementos = 10;
  angle = radians(20);
  radio = 100;
  s = 20;
  origenX = width/2;
  origenY = height/2;
}

function draw(){
  for (let i=0;i<nElementos;i++){
    //Este es el algoritmo para posicionar en circulo
    let posX = origenX + sin(angle * i) * radio;
    let posY = origenY + cos(angle * i) * radio;
    ellipse(posX, posY, s, s);
  }
}