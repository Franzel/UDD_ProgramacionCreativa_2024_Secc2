let botonInfo; //un boton solo para desplegar información de texto en un cuadrito
let botones = [];
let info; //string

function setup() {
  createCanvas(512, 512);
  info = "informacion sobre mi proyecto\nMe encanta mi proyecto\nMi proyecto es hermoso";

  botonInfo = new Boton(30, height-height/4, 20, 20, color(0), "más información", "ACTIVO");
  
  for (let i = 0; i < 7; ++i) {
    botones[i] = new Boton(100 + 50*i, width/2, 30, 30, color(100), "texto guia", "ACTIVO");
  }
}

function draw() {
  background(255);

  for (let i = 0; i < botones.length; ++i) {
    botones[i].dibuja();
  }

  botonInfo.dibuja();
  
  //podemos ver el estado del botón (verdadero o falso), en base a eso desplegamos o no el cuadrito de información
  //la información se dibuja a traves de la función dibujarInfo()
  if (botonInfo.activo) {
    dibujarInfo(30, height - height/4, width/2, height/4 -30);
  }
}

function mousePressed() {
  //cuando apretamos mouse, llamamos al método clickea() de cada botón.
  for (let i = 0; i < botones.length; ++i) {
    botones[i].clickea();
  }
  botonInfo.clickea();
}

function dibujarInfo(px, py, tx, ty) {
  fill(0, 100);
  rect(px, py, tx, ty);
  fill(255);
  textAlign(LEFT);
  text(info, px + 30, py + 30 );
}

/*
Esta es la clase Botón.
 Tiene posicion, tamaño, color inactivo, color activo
 Además dibuja Texto de info (en rollover) y Texto para cuando está activo
 Todos estos parámetros se definen desde fuera de la clase
 */

class Boton {

  constructor(px, py, tx, ty, c, t1, t2) {
    this.posX = px;
    this.posY = py;
    this.tamX = tx;
    this.tamY = ty;
    this.colBase = c; 
    this.texto1 = t1;
    this.texto2 = t2;

    this.activo = false;
    this.over = false;
  }

  dibuja() {
    this.estoyEncima(); //antes que nada verificar si el mouse está encima de este botón

    push();
    translate(this.posX, this.posY);
    //si está encima (rollover)
    if (this.over) {
      if (this.activo) {
        this.col = color(255, 0, 0);
      } else {
        this.col = color(0, 255, 0);
      }
      textAlign(CENTER);
      textSize(8);
      fill(100);
      text(this.texto1, 0, this.tamY*1.1);
    } else {
      this.col = this.colBase;
    }

    //si su estado es activo
    if (this.activo) {
      textAlign(CENTER);
      textSize(10);
      fill(0);
      text(this.texto2, 0, this.tamY * 1.5);
      fill(this.col/2);
      ellipse(0, 0, this.tamX*1.2, this.tamY*1.2);
    }

    fill(this.col);
    ellipse(0, 0, this.tamX, this.tamY);

    pop();
    
  }

  estoyEncima() {
    let distancia = dist(mouseX, mouseY, this.posX, this.posY);
    if (distancia < this.tamX/2) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  clickea() {
    //si el mouse está encima al ser clickeado, el estado de la booleana "activo" cambia de estado
    //si era falso, pasa a verdadero, y viceversa
    if (this.over) {
      this.activo = !this.activo;
    }
  }
}