/* Este ejemplo muestra los pasos básicos para trabajar con un array */

let myNumbers = []; // declarar array de ints

function setup() {

  for (let i = 0; i<4; i++) { 
    myNumbers[i] = 10*i; //asignar valores
  }
}

function draw() {
  for (let i = 0; i<myNumbers.length; i++) {
    print(myNumbers[i]); //acceder a esos valores
  }
}