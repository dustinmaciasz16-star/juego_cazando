let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
// variables y contantes del Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 25;
const ALTURAGATO = 25;
const VELOCIDAD = 10;
const LIMITE_X = canvas.width - ANCHOGATO;
const LIMITE_Y = canvas.height - ALTURAGATO;

 
// variable y constantes de la comida
let comidaX = 0;
let comidaY = 0;
const ANCHOCOMIDA = 15;
const ALTURACOMIDA = 15;

let puntos = 0;
let intervalarTiempo;
let juegoActivo = true;
let mensajes = ""


document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#fa0000");
};

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#ffe602");
}; 

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
    limpiarCanva();
    graficarGato();
    graficarComida();
    if (detectarCollision()){
        console.log("El gato se comio la comida");

        puntos ++;

        mostrarEnSpan("puntos", puntos);

        if(puntos >= 6){
            mostrarEnSpan("mensaje", mensajes);
            clearInterval(intervalarTiempo);
            juegoActivo = false;
        }

        comidaX = generarAleatorio(0, canvas.width - ANCHOCOMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTURACOMIDA);
    }
}

function detectarCollision() {
    return(
        gatoX < comidaX + ANCHOCOMIDA &&
        gatoX + ANCHOGATO > comidaX &&
        gatoY < comidaY + ALTURACOMIDA &&
        gatoY + ALTURAGATO > comidaY
    );
}

function moverIzquierda(){
    if(!juegoActivo) return;
    if(gatoX>0){
        gatoX-= VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverDerecha(){
    if(!juegoActivo) return;
    if (gatoX<LIMITE_X){
        gatoX += VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverArriba(){
    if(!juegoActivo) return;
    if(gatoY>0){
        gatoY -= VELOCIDAD;
        dibujarTodo();
    }
}
 
function moverAbajo(){
    if(!juegoActivo) return;
    if(gatoY<LIMITE_Y){
        gatoY += VELOCIDAD;
        dibujarTodo();
    }
}

 
function iniciarJuego(){
    clearInterval(intervalarTiempo);

    puntos = 0
    tiempo = 35;
    juegoActivo = true;

    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);

    comidaX = generarAleatorio(0, (canvas.width - ANCHOCOMIDA) / VELOCIDAD) * VELOCIDAD;
    comidaY = generarAleatorio(0, (canvas.height - ALTURACOMIDA) / VELOCIDAD) * VELOCIDAD;

    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    dibujarTodo();

    intervalarTiempo = setInterval(restarTiempo, 1000)
}

function reiniciarJuego(){
    iniciarJuego();
}
 