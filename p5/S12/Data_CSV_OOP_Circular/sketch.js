let table; //declaramos una tabla
let dias = []; //declaramos una array de la clase Dias

function preload() {
  table = loadTable("temperaturas.csv", "csv" , "header");//cargar la tabla a la memoria
}

function setup() {
  createCanvas(800, 600);
  
  console.log(table.getRowCount() + " filas en la tabla");// imprimir a consola cantidad de filas
  dias.length = table.getRowCount() //le damos el tamano al array de Días segun numero de filas en la tabla

  for (let i = 0; i < table.getRowCount(); i++) {
    let v0 = table.getNum(i, 0); //rescatar el numero de la 1a columna
    let v1 = table.getNum(i, 1); //rescatar el numero de la 2a columna
    let v2 = table.getNum(i, 2); //rescatar el numero de la 3a columna

    // En cada vuelta del for loop vamos rellenando el array con un objeto de la clase Dias
    // a cada objeto le damos informacion obtenida desde la tabla
    dias[i] = new Dia(width/2, height/2, v0, v1, v2, 12*i); 
  }
}

function draw() {
  background(255);

  for (let i=0; i<dias.length; i++) {
    dias[i].dibujaMax();
  }
}

class Dia {


  constructor(x, y, d, mini, maxi, a) {
    this.posX = x;
    this.posY = y;
    this.tMax = maxi;
    this.tMin = mini;
    this.dia = str(d);
    this.largoTempMax = map(maxi, 0, 45, 0, 180);
    this.largoTempMin = map(mini, 0, 45, 0, 180);
    this.diff = maxi-mini;
    this.rot = a;
    this.radio = 100;
    this.grosor = 12;
  }

  dibujaMax() {

    push();
    translate(this.posX, this.posY);
    rotate(radians(this.rot));

    //texto dia
    textSize(11);
    textAlign(RIGHT);
    fill(0);
    text(this.dia, 95, 4);

    //temp max
    fill(234, 70, 70);
    rect(this.radio, -this.grosor/2, this.largoTempMax, this.grosor);
    textAlign(LEFT);
    text(str(this.tMax), this.radio + this.largoTempMax + 8, 3);

    //temp min
    fill(0, 200, 255);
    rect(this.radio, -this.grosor/2, this.largoTempMin, this.grosor);
    fill(255);
    text(str(this.tMin), this.radio + this.largoTempMin + 3, 4);

    //diff
    fill(253, 228, 90);
    ellipse(this.radio + this.largoTempMax + 46, 0, this.diff, this.diff); //representamos la variacion segun el tamaño de un circulo
    pop();
  }
}