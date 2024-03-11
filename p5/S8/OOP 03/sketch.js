//Declaramos un array de la clase "Modulo". Se hace igual que un array tradicional.
let modulos = [];

function setup() {
    createCanvas(512, 512); 

    // //inicializamos todos los elementos (onjetos "modulo" en este caso) con la informacion que necesita
    // for (let i = 0; i < modulos[0].length; ++i) {
    //   modulos[i]= [];
    //     for (let j = 0; j < modulos[1].length; ++j) {
    //         //Eneste ejemplo, le pasamos solo valores random, pero esto se puede hacer en el orden que queramos
    //         modulos[i][j] = new Modulo(random(width), random(height), random(10,30), color(random(255), 100, 200, 50), floor(random(1, 5)));    
    //     }
    // }

    //Este for loop bidimiensional los ordena en grilla. Apagar el de arriba al prender este para verlo mejor
    for (let i = 0; i < 20; ++i) {
      modulos[i]= [];
        for (let j = 0; j < 20; ++j) {
            //En este ejemplo, le pasamos solo valores random, pero esto se puede hacer en el orden que queramos
            modulos[i][j] = new Modulo(40*i, 40*j, 15, color(random(255), 50, 100, 50), floor(random(1, 5)));
        }
    }
}

function draw() {
    background(255);
    
    //Invocamos el metodo dibuja() de cada objeto
    for (let i = 0; i < modulos[0].length; ++i) {
        for (let j = 0; j < modulos[1].length; ++j) {
            modulos[i][j].dibuja();
        }
    }
}

//CLASE BASICA

class Modulo {
    
    //Constructor
    constructor(x, y, t, c, n) {
        this.posX = x;
        this.posY = y;
        this.tam = t;
        this.col = color(c);
        this.nRepeticiones = n;
        
    }
    
    //Metodos. En este caso, solo tenemos 1 que dibuja
    dibuja() {
        
        fill(this.col);
        stroke(this.col);
        //noFill();
        //Aca usamos la variable int "nRepeticiones" para la cantidad de vueltas del for loop.
        //Entonces cada objeto va a dibujar una cantidad de repeticiones dada por lo que venga del sketch principal
        for (let i = 0; i < this.nRepeticiones; ++i) {
            rect(this.posX, this.posY, this.tam + 7 * i, this.tam + 7 * i);
        }
    }
} 