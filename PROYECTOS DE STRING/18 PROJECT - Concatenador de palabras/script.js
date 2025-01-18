const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const parrafo = document.getElementById("parrafo");

let texto1v = "";
let texto2v = "";

function unir(event) {
    event.preventDefault();
    mostrar();
}

function concatenar() {
    texto1v = texto1.value;
    texto2v = texto2.value;
    const resultado = texto1v.concat(texto2v);
    parrafo.innerText = resultado;
}

function combinar() {
    texto1v = texto1.value;
    texto2v = texto2.value;
    const resultado = texto1v +" " + texto2v;
    parrafo.innerText = resultado;
}