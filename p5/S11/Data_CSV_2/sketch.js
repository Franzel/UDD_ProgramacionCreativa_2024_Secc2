let table;
let ancho = 8;
let espacio = 10;

function preload() {
  table = loadTable("ingresos.csv", "csv" , "header"); //cargamos la tabla
}

function setup() {
    createCanvas(512, 1000);
    
    console.log(table.getRowCount() + " filas en la tabla"); //vemos cuantas filas tiene    
}

function draw() {
    background(255);
    fill(0);
    textSize(10);
    
    //usamos un for loop para ir accediendo a cada fila, una por una
    for (let i = 0 ; i < table.getRowCount() ;i++) {
        let v0 = table.getString(i,0); //creamos una variable string para recibir la info de cada fila en columna 0
        let v1 = table.getNum(i,1);    //creamos una variable int    para recibir la info de cada fila en columna 1
        
        fill(150,0,0);
        textAlign(RIGHT);
        text(v0, 180, 50 +(espacio + ancho)*i); //dibujamos el texto

        let largoBarra = map (v1, 0, 3000000, 0, 200); //mapeamos el numero de la tabla para una medida coherente a nuestro espacio en pixeles    
        rect(200, 50 +(espacio + ancho)*i, largoBarra, -ancho); //usamos ese valor mapeado para el ancho de la barra
      
        textAlign(LEFT);
        text(v1,200 + largoBarra + 10, 50 +(espacio + ancho)*i);//escribimos el numero al lado de cada barra
        noStroke();
        fill(255,0,0);
    }
}