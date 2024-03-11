let tams = [];

function setup() {
  createCanvas(1000,800); 

  //Aca en el setup estamos rellenando el array con una serie de numeros random.

  for (let i = 0; i < 64; i++) {
    tams[i] = random(100);
  }

  print(tams); //veamos los valores que nos dio el random
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < tams.length; i++) {
    
  //cuando decimos tams.length estamos pidiendo el "largo" de la lista o el "tamano del array"
  //definido arriba cuando creamos el array.
    push();
    translate(width/2, height/2);
    rotate(TWO_PI/tams.length *i);
    let r = map(tams[i], 0, 100, 50, 255);
    let g = map(tams[i], 0, 100, 100, 255);
    fill(r, g, 0);
    rect(100, 0, tams[i], 3); //dibujemos barritas cuyo largo lo define el array
    text(round(tams[i]*10)*0.1, 100 + tams[i], 2);
    pop();
  }
}

function randomizar() {
  for (let i = 0; i < tams.length; i++) {
    tams[i] = random(100);
  }
  console.log("reset");
}

function mousePressed() {
  randomizar();
  print(tams); //veamos los valores que nos dio el random
}