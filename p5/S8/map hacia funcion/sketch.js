function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  let miRangoX = map(mouseX, 0, width, 0, 40);
  let miRangoY = map(mouseY, 0, width, 0, 40);

  //cuadrado(200, 200, miRangoX, miRangoY); //ver este solo y apagar el for loop para entender 

  for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
      cuadrado(50*i, 50*j, miRangoX, miRangoY);
    }
  }
}

function cuadrado(posX, posY, distX, distY) {
  push();
  translate(posX, posY);
  //rotate(radians(distX*4 + distY));
  fill(255,0,0);
  rect(distX, distY, 10, 10);
  
  fill(255,255,0);
  rect(-distX, distY, 10, 10);
  
  fill(0,255,0);
  rect(-distX, -distY, 10, 10);
  
  fill(255);
  rect(distX, -distY, 10, 10);
  pop();
}