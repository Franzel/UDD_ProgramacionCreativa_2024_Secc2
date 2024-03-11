let table;
let dias = [];

function preload() {
  table = loadTable("temperaturas.csv", "csv" , "header");
}

function setup() {
  createCanvas(800, 400);
  
  console.log(table.getRowCount() + " filas en la tabla");
  dias.length = table.getRowCount() //array de Días, su tamaño segun numero de filas en la tabla

  for (let i = 0; i < table.getRowCount(); i++) {
    let v0 = table.getNum(i, 0); //rescatar el numero de la 1a columna
    let v1 = table.getNum(i, 1); //rescatar el numero de la 2a columna
    let v2 = table.getNum(i, 2); //rescatar el numero de la 3a columna

    //rellenamos el array, creando un objeto de la clase con la información desde la tabla
    dias[i] = new Dia(30 + 25*i, height/2, v0, v1, v2); 
  }
}

function draw() {
  background(255);

  for (let i=0; i<dias.length; i++) {
    dias[i].dibujaMax();
    dias[i].dibujaMin();
    dias[i].dibujaDiff();
  }
}

class Dia {


  constructor(x, y, d, mini, maxi) {
    this.posX = x;
    this.posY = y;
    this.tMax = maxi;
    this.tMin = mini;
    this.dia = str(d);
    this.largoTempMax = map(maxi, 0, 45, 0, 150);
    this.largoTempMin = map(mini, 0, 45, 0, 150);
    this.diff = maxi-mini;
    this.grosor = 20;
  }

  dibujaMax() {

    //texto dia
    textSize(9);
    fill(0);
    text(this.dia, this.posX, this.posY+10);

    //temp max
    fill(255, 0, 0);
    rect(this.posX, this.posY, this.grosor, -this.largoTempMax);
    text(str(this.tMax), this.posX, this.posY - this.largoTempMax - 5);
  }

  dibujaMin() {
    //texto temp min
    fill(0, 0, 255);
    rect(this.posX, this.posY, this.grosor, -this.largoTempMin);
    fill(255);
    text(str(this.tMin), this.posX, this.posY - this.largoTempMin - 5);

    fill(220, 200, 80);
    ellipse(this.posX + this.grosor/2, this.posY-this.largoTempMax-30, this.diff, this.diff); //representamos la variacion segun el tamaño de un circulo
  }

  dibujaDiff() {
    //diferencia max-min
    fill(220, 200, 80);
    ellipse(this.posX + this.grosor/2, this.posY-this.largoTempMax-30, this.diff, this.diff); //representamos la variacion segun el tamaño de un circulo
  }
}