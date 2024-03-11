let table;

function preload() {
  table = loadTable("temperaturas.csv", "csv" , "header");
}

function setup() {
  createCanvas(800, 400);
  
  console.log(table.getRowCount() + " filas en la tabla");
}

function draw() {
  background(255);
  for (let i = 0; i < table.getRowCount(); i++) {
    let v0 = table.getNum(i, 0); //rescatar el numero de la 1a columna
    let v1 = table.getNum(i, 1); //rescatar el numero de la 2a columna
    let v2 = table.getNum(i, 2); //rescatar el numero de la 3a columna
    
    fill(0);
    textSize(10);
    text(v0, 100+20*i, 310); //dibujar dia

    fill(0, 0, 255, 50);
    rect(100+20*i, 300, 15, -v1 * 3); //minima
    
    fill(255, 0, 0, 50);
    rect(100+20*i, 300, 15, -v2 * 3); //maxima
    
    textSize(8);
    fill(0,0,255);
    text(str(v1), 100+20*i, 300-v1*3); //minima
    
    fill(255,0,0);
    text(str(v2), 100+20*i, 300-v2*3); //maxima
    
    let diff = v2-v1; //sacar la diferencia entre minima y máxima, lo que da la variacion termica diaria
    ellipse(108+20*i, 180, diff, diff); //representamos la variacion segun el tamaño de un circulo
  }
}