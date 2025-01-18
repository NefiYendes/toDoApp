const texto = document.getElementById("palabra");
const palabra = document.getElementById("palabra2");
const parrafo = document.getElementById("parrafo");
const span1 = document.getElementById("r1");
const span2 = document.getElementById("r2");

let textv = "";
let palabrav = "";

function evento(event) {
    event.preventDefault();
    mostrar();
}

function first() {
    textv = texto.value;
    palabrav = palabra.value;
    span1.innerText = `La palabra ${palabrav} se encuentra en la posicion: `;
    span2.innerText = textv.indexOf(palabrav);
}
function last() {
    textv = texto.value;
    palabrav = palabra.value;
    span1.innerText = `La palabra ${palabrav} se encuentra en la posicion: `;
    span2.innerText = textv.lastIndexOf(palabrav);
}

function mostrar() {
    parrafo.classList.add("mostrar");
}