const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");
const span = document.getElementById("cantidad");

let textov = "";

function contar(event){

    event.preventDefault();
    textov = texto.value;
    span.innerText = textov.length;
    mostrar();

}

function mostrar(){

    parrafo.classList.add("mostrar");

}

function ocultar(){

    parrafo.classList.remove("mostrar");

}