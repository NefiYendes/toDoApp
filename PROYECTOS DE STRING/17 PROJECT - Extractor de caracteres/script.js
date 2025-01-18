const texto = document.getElementById("texto");
const texto2 = document.getElementById("texto2");
const parrafo = document.getElementById("parrafo");
const span1 = document.getElementById("r1");
const span2 = document.getElementById("r2");

let textov = "";
let palabrav = "";

function evento(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar");
}
function f1() {
    textov = texto.value;
    palabrav = texto2.value;
    span1.innerText = `El caracter ubicado en la posicion ${palabrav} es: `;
    span2.innerText = textov.at(palabrav);
}
function f2() {
    textov = texto.value;
    palabrav = texto2.value;
    span1.innerText = `El caracter ubicado en la posicion ${palabrav} es: `;
    span2 .innerText = textov.charAt(palabrav);
}
function f3() {
    textov = texto.value;
    palabrav = texto2.value;
    span1.innerText = `El caracter ubicado en la posicion ${palabrav} es: `;
    span2.innerText = textov[palabrav];
}
function f4() {
    textov = texto.value;
    palabrav = texto2.value;
    span1.innerText = `El caracter ubicado en la posicion ${palabrav} es: `;
    span2.innerText = textov.charCodeAt(palabrav);
}
function borrar() {
    span1.innerText = "";
    span2.innerText = "";
}
