const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const parrafo =  document.getElementById("parrafo");

let pesov = "";
let alturav = "";

function calcular(event) {
    event.preventDefault();
    mostrar()
}
function mostrar1(){
    parrafo.classList.add("mostrar1");
}
function mostrar2() {
    parrafo.classList.add("mostrar2");
}
function evaluar() {
    pesov = peso.value;
    alturav = altura.value;
    const pesoMaximo = (alturav - 100) * 1;
    const pesoMinimo = (alturav - 100) * 0.77;

    if(pesov >= pesoMinimo && pesov <= pesoMaximo) {
        parrafo.innerText = `Estás dentro de tu peso ideal`
        mostrar1()
    }else if (pesov < pesoMinimo) {
        parrafo.innerText = `Estás por debajo de tu peso ideal`;
        mostrar2()
} else { parrafo.innerText = `Estás por encima de tu peso ideal`;
    mostrar2()
}
}