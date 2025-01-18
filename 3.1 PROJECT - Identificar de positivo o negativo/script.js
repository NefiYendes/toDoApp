const num = document.getElementById("num");
const parrafo = document.getElementById("parrafo");

let numv = "";

function verificar(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar");
}
function clasificar() {
    let numv = parseFloat(num.value);
    if(numv > 0){
        parrafo.innerText = `El numero ${numv} es positivo`
    }else{
        parrafo.innerText = `El numero ${numv} es negativo`;
    }
};