let imagen = document.querySelector(".img");
let parrafo = document.querySelector("p");
let menu = document.querySelector(".menu-list");


function saludar() {
    parrafo.innerHTML = `¡Hola ${nombre}! Tienes ${edad} años`;
    cuadrado.style.backgroundColor = "blue";
    cuadrado.style.borderRadius = "50%";
}

function Mostrar() {
    imagen.style.display = "block";
}

function Ocultar() {
    imagen.style.display = "none";
}

function sivernover() {
    menu.classList.toggle("oculto")
}
