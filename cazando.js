let canvas = document.getElementById("pantalla");
let ctx = canvas.getContext("2d");
// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
const VELOCIDAD = 10;
 
// Raton
let ratonX = 0;
let ratonY = 0;
const ANCHORATON = 30;
const ALTURARATON = 30;


document.getElementById("btnArriba").onclick = () => movergato("arriba");
document.getElementById("btnAbajo").onclick = () => movergato("abajo");
document.getElementById("btnIzquierda").onclick = () => movergato("izquierda");
document.getElementById("btnDerecha").onclick = () => movergato("derecha");
 
function graficar(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficar(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
};
 
function graficarRaton() {
    graficar(ratonX, ratonY, ANCHORATON, ALTURARATON, "#ff0000");
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
    graficarRaton();
}
 

iniciarJuego();
//window.onload = iniciarJuego;