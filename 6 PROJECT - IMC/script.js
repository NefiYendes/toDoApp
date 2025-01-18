const imagem = document.getElementById("imagen");
let tipo;
const p = document.getElementById("parrafo");

function clasificar(event) {
    event.preventDefault();

    let alturav = document.getElementById("altura").value;
    let pesov = document.getElementById("peso").value;
    const pesoMaximo = (alturav - 100) * 1;
    const pesoMinimo = (alturav - 100) * 0.77;
    
   if(pesov >= pesoMinimo && pesov <= pesoMaximo){
    parrafo.innerText = `Estás dentro de tu peso ideal`;
    tipo = "normal"
}

function mostrar() {

    p.classList.add("mostrar");
    imagem.className = `imagen ${tipo}`;

}

function ocultar() {

    p.classList.remove("mostrar");
    imagem.className = `imagen`;

    }
}