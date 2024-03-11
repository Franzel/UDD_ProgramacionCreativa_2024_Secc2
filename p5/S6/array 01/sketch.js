let valoresA = [40, 80, 120, 160, 200];
let valoresB = [20, 40, 60, 80, 100];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  // por lo general, para acceder a la informacion guardada en el array utilizamos un for loop
  // el for loop, como es un contador (i) que incrementa en cada vuelta,
  // nos permite ir revisando uno a uno el contenido de los "espacios" del array
  
  background(255);
  for (let i=0; i<valoresA.length; i++) {
    if (i==3) {         
      //si es el espacio (elemento) #3 del array. Pruebe cambiando este numero
      fill(255, 0, 0);  //pinta rojo
    } else {            //si no
      fill(255);        //pinta blanco
    }

    ellipse(valoresA[i], valoresB[i], 15, 15); //posicionamos en base a los numeros guardados en el array
  }
}