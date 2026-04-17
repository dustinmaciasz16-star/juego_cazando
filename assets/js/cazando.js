let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// ===== AJUSTE RESPONSIVE =====
function ajustarCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetWidth;
}

// ===== GATO =====
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 25;
const ALTURAGATO = 25;
const VELOCIDAD = 10;

// ===== COMIDA =====
let comidaX = 0;
let comidaY = 0;
const ANCHOCOMIDA = 15;
const ALTURACOMIDA = 15;

// ===== JUEGO =====
let puntos = 0;
let tiempo = 0;
let intervalarTiempo;
let juegoActivo = true;
let mensajes = "¡Ganaste! 🎉";

// ===== BOTONES =====
document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();

// ===== DIBUJO =====
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#fa0000");
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#ffe602");
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
    limpiarCanva();
    graficarGato();
    graficarComida();

    if (detectarCollision()) {
        puntos++;
        mostrarEnSpan("puntos", puntos);

        if (puntos >= 6) {
            mostrarEnSpan("mensaje", mensajes);
            clearInterval(intervalarTiempo);
            juegoActivo = false;
        }

        comidaX = generarAleatorio(0, canvas.width - ANCHOCOMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTURACOMIDA);
    }
}

// ===== COLISION =====
function detectarCollision() {
    return (
        gatoX < comidaX + ANCHOCOMIDA &&
        gatoX + ANCHOGATO > comidaX &&
        gatoY < comidaY + ALTURACOMIDA &&
        gatoY + ALTURAGATO > comidaY
    );
}

// ===== MOVIMIENTO =====
function moverIzquierda() {
    if (!juegoActivo) return;

    if (gatoX > 0) {
        gatoX -= VELOCIDAD;
        dibujarTodo();
    }
}

function moverDerecha() {
    if (!juegoActivo) return;

    let limiteX = canvas.width - ANCHOGATO;

    if (gatoX < limiteX) {
        gatoX += VELOCIDAD;
        dibujarTodo();
    }
}

function moverArriba() {
    if (!juegoActivo) return;

    if (gatoY > 0) {
        gatoY -= VELOCIDAD;
        dibujarTodo();
    }
}

function moverAbajo() {
    if (!juegoActivo) return;

    let limiteY = canvas.height - ALTURAGATO;

    if (gatoY < limiteY) {
        gatoY += VELOCIDAD;
        dibujarTodo();
    }
}

// ===== INICIO =====
function iniciarJuego() {
    clearInterval(intervalarTiempo);

    ajustarCanvas(); // 🔥 clave para responsive

    puntos = 0;
    tiempo = 35;
    juegoActivo = true;

    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("mensaje", "");

    comidaX = generarAleatorio(0, canvas.width - ANCHOCOMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTURACOMIDA);

    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    dibujarTodo();

    intervalarTiempo = setInterval(restarTiempo, 1000);
}

// ===== TIEMPO =====
function restarTiempo() {
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo <= 0) {
        clearInterval(intervalarTiempo);
        juegoActivo = false;
        mostrarEnSpan("mensaje", "⏰ Se acabó el tiempo");
    }
}

// ===== REINICIAR =====
function reiniciarJuego() {
    iniciarJuego();
}

// ===== RESPONSIVE AL CAMBIAR TAMAÑO =====
window.addEventListener("resize", () => {
    ajustarCanvas();
    dibujarTodo();
});