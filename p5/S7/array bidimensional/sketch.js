let nFilas = 20;
let nColumnas = 20;
let espacio = 30;

//declaremos el array vacio, la cantidad de elementos esta dado por las variables nColumnas y nFilas
let miNumero = [];

function setup() {
  createCanvas (400, 400);

  //Asignamos valores al array via for loop
  for (let i=0; i<nColumnas; i++) {
    miNumero[i] = [];
    
    for (let j=0; j<nFilas; j++) {
      miNumero [i] [j] = color(20*i, random(255), 255);
    }
  }

  //Solo para imprimir a la consola los valores que acabamos de asignar
  for (let i=0; i<nColumnas; i++) {
    for (let j=0; j<nFilas; j++) {
      print("i= " + i + ", j= " + j + " = "  + miNumero[i][j]);
    }
  }
}

function draw() {
  background(255);
  //noStroke();

  //Usemos los valores que tenemos guardados en el array para pintar algo
  for (let i=0; i<nColumnas; i++) {
    for (let j=0; j<nFilas; j++) {

      if (i==2 && j==10) {     // si la columna es 2 y la fila 10
        fill(255, 0, 0);       // pinta rojo.
      } else {                 // si no
        fill(miNumero[i][j]);  // pinta usando el color guardado en el array
      }
      ellipse(espacio*i, espacio*j, 16, 16);
    }
  }
}