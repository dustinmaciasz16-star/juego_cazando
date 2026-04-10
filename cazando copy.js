let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
// variables y contantes del Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
const VELOCIDAD = 10;
 
// variable y constantes de la comida
let comidaX = 0;
let comidaY = 0;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;


document.getElementById("btnArriba").onclick = () => moverArriba("arriba");
document.getElementById("btnAbajo").onclick = () => moverAbajo("abajo");
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha("derecha");
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};

function graficarGato() {
    // Limitar eje X
    if (gatoX < 0) {
        gatoX = 0;
    }
    if (gatoX + ANCHOGATO > canvas.width) {
        gatoX = canvas.width - ANCHOGATO;
    }

    // Limitar eje Y
    if (gatoY < 0) {
        gatoY = 0;
    }
    if (gatoY + ALTURAGATO > canvas.height) {
        gatoY = canvas.height - ALTURAGATO;
    }
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
}; 

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gatoComida() {

}

function moverIzquierda() {
    gatoX -= 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverDerecha() {
    gatoX += 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverArriba() {
    gatoY -= 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverAbajo() {
    gatoY += 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

 
function iniciarJuego(){
    comidaX = (canvas.width) - (ANCHOGATO / 2);
    comidaY = (canvas.height) - (ALTURAGATO / 2);

    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);


    graficarComida();
    graficarGato();
}
 