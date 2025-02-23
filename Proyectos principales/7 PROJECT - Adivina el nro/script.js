const nro = document.getElementById("nro");
const parrafo = document.getElementById("parrafo");
const formulario = document.querySelector("form");
const final = document.getElementById("intenta");
const div = document.getElementById("intentar");
const h1 = document.querySelector("h1");

let adivina = Math.floor(Math.random() * 100) + 1;
let intentos = 2;
let nrov;


function calcular(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar");
}
function ocultar() {
    h1.style.display = "none";
    formulario.style.display ="none";
    div.classList.add("intentar");
}
function adivinar(){
    nrov = nro.value;

    if(nrov == adivina) {<p id="parrafo"></p>
        final.innerText = `Has ganado!. El nro era ${adivina}`;
        ocultar();
    }else if(intentos == 0) {
        final.innerText = `Has perdido. El nro era ${adivina}`;
        ocultar();
    }else if(nrov > adivina) {
        parrafo.innerText = `El nro que ingresaste es mayor. Te quedan ${intentos} intentos.`;
        intentos--;
    }else {
        parrafo.innerText = `El nro que ingresaste es menor. Te quedan ${intentos} intentos.`;
        intentos--;
    }
}


function again() {
    location.reload();
}