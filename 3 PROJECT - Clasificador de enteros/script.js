const num = document.getElementById("num");
const parrafo = document.getElementById("parrafo");

let numv = "";
let parrafov = "";

function verificar(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar");
}
function clasificar() {
    let numv = parseFloat(num.value);
    if(Number.isInteger(numv)) {
        parrafo.innerText = `El numero ${numv} es un entero.`;
    }else {
        parrafo.innerText = `El numero ${numv} no es un entero.`
    }
};