const mensaje = document.getElementById("mensaje")
const parrafo = document.getElementById("resultado")
let mensajev = "";


function evento(event) {
event.preventDefault();

resultado.style.fontSize = "20px"; 
}

function mayuscula() {
    mensajev = mensaje.value.toUpperCase();
    resultado.innerText = `Su mensaje en mayúscula es: \n\n${mensajev}`;
    resultado.ClassList.add("show");
}

function minuscula() {
    mensajev = mensaje.value.toLowerCase();
    resultado.innerText = `Su mensaje en minuscula es: \n\n${mensajev}`;
    resultado.ClassList.add("show");
}
