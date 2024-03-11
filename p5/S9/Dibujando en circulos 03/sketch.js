/*
 Basado en el ejemplo anterior(02),
 ahora que todo funciona podemos estilizarlo.
 Francisco Zamorano, 2017
 */

let origenX, origenY;  //usaremos este para el centro de la circunferencia
let radioInicial; // radio de la circunferencia
let nElementosInicial; //cantidad de cosas a dibujar
let nAnillos; //cuantas repeticiones para crear 'anillos'
let espacioAnillos; //separacion entre 'anillos' 

function setup() {
  createCanvas(600, 600);
  origenX = width/2; //mitad del ancho del canvas
  origenY = height/2; //mitad del alto del canvas
  radioInicial = 50; //inicializamos el radio, lo vamos a modificar despues
  nElementosInicial = 13;
  nAnillos = 20;
  espacioAnillos = 15;
  colorMode (HSB, 360, 100, 100);
}

function draw() {
  background(255);
  for (let i = 0; i<nAnillos; i++) { //loop para repetir anillos
    let radio = radioInicial + espacioAnillos*i; // en cada loop de 'i', incrementamos el radio en 20px
    let nElementos = nElementosInicial + nElementosInicial/2*i; //en cada anillo, incrementamos en 12 la cantidad de elementos
    let hue = (i%12)*30; //esta es una tecnica para limitar que un numero no crezca, el operador "módulo"(%) genera un ciclo.
    let miColor = color(hue, 100, 100);

    //dibujemos un anillo
    for (let j = 0; j<nElementos; j++) { //loop para posicionar los elementos
      let angulo = (TWO_PI/nElementos) * j;
      let x = origenX + cos(angulo) * radio;
      let y = origenY + sin(angulo) * radio;
      miDibujo(x, y, 10, 10, miColor); //en vez de dibujar directo aca, llamamos a una funcion. Esto es opcional por supuesto
    }
  }
}

function miDibujo(x, y, tX, tY, c) {
  //tX/=2;
  //tY/=2;
  fill(c);
  noStroke();
  ellipse(x, y, tX, tY);
  stroke(c);
}