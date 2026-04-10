let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
// variables y contantes del Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
const VELOCIDAD = 10;
const LIMITE_X = canvas.width - ANCHOGATO;
const LIMITE_Y = canvas.height - ALTURAGATO;

 
// variable y constantes de la comida
let comidaX = 0;
let comidaY = 0;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;


document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
}; 

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
    limpiarCanva();
    graficarGato();
    graficarComida();

    if (detectarCollision){
        alert("El gato se comio la comida");
    }
}

function detectarCollision() {
    if(
        gatoX < comidaX + ANCHOCOMIDA &&
        gatoX + ANCHOGATO > comidaX &&
        gatoY < comidaY + ALTURACOMIDA &&
        gatoY + ALTURAGATO > comidaY
    );
}


function moverIzquierda(){
    if(gatoX>0){
        gatoX-= VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverDerecha(){
    if (gatoX<LIMITE_X){
        gatoX += VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverArriba(){
    if(gatoY>0){
        gatoY -= VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverAbajo(){
    if(gatoY<LIMITE_Y){
        gatoY += VELOCIDAD;
        dibujarTodo();
    }
}

 
function iniciarJuego(){
    comidaX = (canvas.width) - (ANCHOGATO / 2);
    comidaY = (canvas.height) - (ALTURAGATO / 2);

    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);


    graficarComida();
    graficarGato();
}
 