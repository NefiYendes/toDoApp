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

function verificar() {
    textov = texto.value;
    parrafov = parrafo.value;
    if(textov >= 18) {
        parrafo.innerHTML = `Es mayor de edad`;
    } else {
        parrafo.innerHTML =   `Es menor de edad`;
    }

}