const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const texto3 = document.getElementById("texto3");
const parrafo = document.getElementById("parrafo");

let num1v = "";
let num2v = ""; 
let num3v = "";
let resultado = "";

function evaluar(event) {
    event.preventDefault();
}
function mostrar1() {
parrafo.classList.add("mostrar1")
}
function mostrar2() {
parrafo.classList.add("mostrar2")
}
function mostrar3() {
parrafo.classList.add("mostrar3")
}

function promediar() {
    num1v = parseFloat(texto1.value);
    num2v = parseFloat(texto2.value);
    num3v = parseFloat(texto3.value);
    resultado = Math.ceil((num1v + num2v + num3v) / 3);
    if(resultado > 17) {
        parrafo.innerText = ` Excelente, tu promedio es ${resultado}!`;
        mostrar1();
    }else if (resultado <= 17 && resultado > 10) {
        parrafo.innerText = `Vas bien, sigue adelante, tu promedio es ${resultado}`;
        mostrar2()
}else {
    parrafo.innerText = `No te desanimes, tu promedio es ${resultado}`
    mostrar3()
    }
}