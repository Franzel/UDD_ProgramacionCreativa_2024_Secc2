//declaramos, creamos y asignamos un array de floats
let valoresA = [];
//esta es solo una manera de crear arrays

function setup() {
  
  valoresA[] = {30,60,90,180,250};
  
  createCanvas(500, 500);
}

function draw() {
  //Ocupamos esos valores guardados para posicionar en x varias elipses 
  ellipse(valoresA[0], 100, 15, 15);
  ellipse(valoresA[1], 100, 15, 15);
  ellipse(valoresA[2], 100, 15, 15);
  ellipse(valoresA[3], 100, 15, 15);
  ellipse(valoresA[4], 100, 15, 15);
}