let tams = [];

function setup() {
    createCanvas(512, 512); 
    //cuando decimos tams.length estamos pidiendo el "largo" de la lista o el "tamano del array"
    //definido arriba cuando creamos el array.
    //Aca en el setup estamos rellenando el array con una serie de numeros random.

    for (let i = 0;i < 50 ;  i++) {
        tams[i] = random(100);
    }

    print(tams); //veamos los valores que nos dio el random
}

function draw() {
  
    background(0);

    
    for (let i = 0;i < tams.length ; i++) {
        let r = map(tams[i], 0, 100, 0, 255);
        fill(r,0,0);
        rect(100, i *5, tams[i], 3); //dibujemos barritas cuyo largo lo define el array
    }
    
}