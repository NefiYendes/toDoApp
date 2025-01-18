const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

let textov = "";
let parrafov = "";

function evento(event) {
    event.preventDefault();
    mostrar();
}

function mostrar() {
    parrafo.classList.add("mostrar");
}

function repetir() {
    textov = texto.value;
    parrafov = prompt(`Cuantas veces quieres que se repita el texto?`);
    const resultado = textov.repeat(parrafov);
    parrafo.innerText = resultado;
}