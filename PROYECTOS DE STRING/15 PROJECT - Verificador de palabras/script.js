const text = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

let textov = "";
let palabra = "";

function evento(event) {
    event.preventDefault();
}
function empieza() {
    textov = text.value;
    palabra = prompt("Verificar si empieza con: ");
    const resultado = textov.startsWith(palabra);
    parrafo.innerText = `Empieza el texto o la palabra "${palabra}"?  ${resultado}`;
    mostrar();
}

function incluye() {
    textov = text.value;
    palabra = prompt("Verificar si incluye: ");
    const resultado = textov.includes(palabra)
    parrafo.innerText = `Incluye el texto o la palabra "${palabra}"?  ${resultado}`;
    mostrar()
}

function termina() {
    textov = text.value;
    palabra = prompt("Verificar si termina con: ");
    const resultado = textov.endsWith(palabra);
    parrafo.innerText = `Termina el texto o la palabra "${palabra}"?  ${resultado}`;
    mostrar();
}
function mostrar() {
    parrafo.style.fontSize = "20px";
}
