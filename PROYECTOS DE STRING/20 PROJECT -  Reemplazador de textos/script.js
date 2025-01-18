const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

let textov = "";
let parrafov = "";

function evento(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar")
}
function reemplazar1() {
    textov =  texto.value;
    const resultado = prompt(`Cual palabras deseas reemplazar?`);
    const resultado2 = prompt(` Por cual palabras deseas reemplazarla?`);
    parrafo.innerText = textov.replace(resultado,resultado2);
}
function reemplazar2() {
    textov =  texto.value;
    const resultado = prompt(`Cual palabras deseas reemplazar?`);
    const resultado2 = prompt(` Por cual palabras deseas reemplazarla?`);
    parrafo.innerText = textov.replaceAll(resultado,resultado2);
}
function reemplazar3() {
    textov =  texto.value;
    const resultado = prompt(`Cual palabras deseas reemplazar?`);
    const resultado2 = prompt(` Por cual palabras deseas reemplazarla?`);
    parrafo.innerText = textov.replace(new RegExp(resultado,"g"),resultado2);
}