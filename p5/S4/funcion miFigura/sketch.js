function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  miFigura1(300, 150, 10);
  miFigura1(90,300, 80);
  miFigura1(width/2,height/2, 50);
  miFigura1(mouseX, mouseY, 20);
}

function miFigura1(x, y, tam){
  circle(x,y,tam);
  line(x+tam/2, y-tam/2, x+tam, y-tam);
  line(x-tam/2, y-tam/2, x-tam, y-tam);
  line(x-tam/2, y+tam/2, x-tam, y+tam);
  line(x+tam/2, y+tam/2, x+tam, y+tam);
  
}