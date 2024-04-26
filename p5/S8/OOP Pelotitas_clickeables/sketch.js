let pelotitas = []; //creamos un array que albergará a los objetos de la clase Pelota

function setup() {
  createCanvas(600, 600);

  //rellenamos el array con objetos dela clase Pelotas
  for (let i = 0; i < 100; i++) {
    
    let numeroRandom = random(-1,1); //aca generamos un random, que da resultados ENTRE -1 y 1, con decimales incluidos
    let numeroFinal = (numeroRandom<0)? -1:1; //esta es una condicional, si es menor a 0, que sea -1, y si es mayor que 0, que sea 1
    
    let col = color(random(50, 100), 0, random(255), 100); //definimos una variable de color concierto random
    pelotitas[i] = new Pelota(
      random(100, width - 100),
      random(height),
      random(20, 100),
      col,
      random(3),
      numeroFinal //usamos el resultado -1 o 1, lo que da la dirección
    );
  }
}

function draw() {
  background(color('#278DB0'));
  //llamamos a cada uno de los objetos guardados en el array, e invocamos sus métodos
  for (let i = 0; i < pelotitas.length; i++) {
    pelotitas[i].dibuja();
    pelotitas[i].avanza();
    pelotitas[i].reaparece(); //usar este para que reaparezcan al salir del canvas
    // pelotitas[i].rebota(); //usar este para que reboten en las orillas
  }
}

function mouseClicked() {
  for (let i = 0; i < pelotitas.length; i++) {
    if (dist(mouseX, mouseY, pelotitas[i].x, pelotitas[i].y) < pelotitas[i].t / 2) {
      pelotitas[i].sel = !pelotitas[i].sel; // esto hace que pasemos de verdadero a falso, y de falso a verdadero
    }
  }
}

// function mouseDragged() {
//   for (let i = 0; i < pelotitas.length; i++) {
//     if (dist(mouseX, mouseY, pelotitas[i].x, pelotitas[i].y) < pelotitas[i].t / 2 && mouseIsPressed) {
//       pelotitas[i].sel = true;
//     }
//   }
// }

function keyPressed() {
  if (key == "c") {
    for (let i = 0; i < pelotitas.length; i++) {
      // pelotitas[i].sel = false;
      pelotitas[i].c = color(255, 0, 0);
    }
  }
}

class Pelota {
  constructor(x, y, t, c, v, d) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.c = c;
    this.v = v;
    this.d = d;
    this.sel = false;
    this.colIni = c; //hacemos una copia del color inicial, para cuando cambie podamos volver a él. 
  }

  dibuja() {
    //usamos la booleana de "sel" para determinar el color
    if (this.sel == true) {
      this.c = color(255, 255, 0);
    }else{
      this.c = this.colIni;
    }
    fill(this.c);
    circle(this.x, this.y, this.t);
  }

  avanza() {
    //aca usamos la tecnica de separar la velocidad de la dirección
    //en cada cuadro, le sumamos a x la velocidad multiplicado por la dirección
    this.x += this.v * this.d; //this.x = this.x + this.v
  }

  reaparece() {
    //si sale de los bordes, corregimos la posición
    //chequeo lado derecho
    if (this.x > width + this.t) {
      this.x = -this.t;
    }

    //chequeo lado izquierdo
    if (this.x < -this.t) {
      this.x = width + this.t;
    }
  }

  rebota() {
    //aca hacemos que rebote. Si choca con la orilla invertimos la dirección
    if (this.x > width - this.t / 2) {
      this.d *= -1;
    }

    if (this.x < this.t / 2) {
      this.d *= -1;
    }
  }
}
