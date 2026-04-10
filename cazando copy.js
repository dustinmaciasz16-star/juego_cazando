let canvas = document.getElementById("pantalla");
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


document.getElementById("btnArriba").onclick = () => movergato("arriba");
document.getElementById("btnAbajo").onclick = () => movergato("abajo");
document.getElementById("btnIzquierda").onclick = () => movergato("izquierda");
document.getElementById("btnDerecha").onclick = () => movergato("derecha");
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};

function movergato (direccion) {
    if (direccion === "arriba") gatoY -= VELOCIDAD;     
    if (direccion === "abajo") gatoY += VELOCIDAD;     
    if (direccion === "izquierda") gatoX -= VELOCIDAD;     
    if (direccion === "derecha") gatoX += VELOCIDAD;
    graficarGato();
};
 
function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    movergato();
    graficarGato();
    graficarComida();
}
 

iniciarJuego();
//window.onload = iniciarJuego;