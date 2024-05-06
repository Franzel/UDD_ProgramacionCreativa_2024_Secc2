function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  
  //Texto basico
  textSize(14);
  fill(0);
  textAlign(CENTER);
  text("Texto en P5", width/2, height/2);
  
  //texto animado
  fill(0,0,255);
  textSize(20 + sin(frameCount * 0.05) * 8);
  text("Texto animado", width/2, height/2 + 100);
  
  //texto rotado
  push();
  translate(100, height/2+100);
  rotate(radians(90));
  textSize(18);
  fill(255,0,0);
  text("Texto rotado", 0,0);
  pop();
  
  //texto a traves de variable
  textSize(16);
  fill(0,200,100);
  let t = "texto a traves de variable String";
  text(t, width/2, height-100);
  
}