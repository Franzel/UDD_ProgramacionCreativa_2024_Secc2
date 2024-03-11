let nElementosInicial;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB);
  nElementosInicial = 3; // cantidad de elementos para el primer anillo 
}

function draw() {
  background(0);

  for (let i = 1; i < 20; i++) {
    //en cada vuelta del loop vamos a agregarle mas elementos a cada anillo
    let nElementos = nElementosInicial + 8 * i; 
  
    for (let j = 0; j < nElementos + 1; j++) {
      let angulo = (360 / nElementos) * j;
      push();
      translate(width / 2, height / 2);
      rotate(angulo);
      figura(20 * i, 0, 10, color(angulo, 100, 100));
      pop();
    }
  }
}

function figura(x, y, t, c) {
  fill(c);
  circle(x, y, t);
  stroke(c);
  line(x, y, x + t, y);
}
