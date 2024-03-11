let nObjetos = 5500;
modulos = [];

function setup() {
  createCanvas(512, 512);
  for (let i = 0; i < nObjetos; ++i) {
    let miColor = color(255, 0, random(255), 30);
    let miX = random(-100, width + 100);
    let miY = random(-100, height + 100);
    let miTam = random(60);

    modulos[i] = new Modulo(miX, miY, miTam, miColor);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < modulos.length; ++i) {
    let d = dist(modulos[i].posX, modulos[i].posY, mouseX, mouseY);
    //let d = dist(modulos[i].posX, modulos[i].posY, 0,0);
    let dMap = map(d, 0, sqrt(sq(width) + sq(height)), 0,360); 
    modulos[i].dibuja(dMap);
  }
}

class Modulo {
  
  //Constructor
  constructor(x, y, t, c) {
    this.posX = x;
    this.posY = y;
    this.tam = t;
    this.col = color(c);
  }

  //Metodos. En este caso, solo tenemos 1 que dibuja
  dibuja(o) {
    fill(this.col);
    noStroke();
   
    push();
    translate(this.posX, this.posY);
    rotate(radians(o) * sin(frameCount*0.01));
    //rotate(radians(o));
    rect(0, 0, this.tam, this.tam/5);
    pop();
    
    //circle(pX, this.posY, this.tam);
  }
}