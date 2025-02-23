const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

let textoV = "";

function calcular(event) {
    event.preventDefault();
    mostrar()
}
function mostrar() {
    parrafo.classList.add("mostrar")
}
function ingresar() {

let textoV = texto.value.toLowerCase();

    switch(textoV) {

        case "lunes":
            parrafo.innerText = "ACTIVO ACTIVO";
            break;
        case "martes":
            parrafo.innerText = "Aun seguimos!"
            break;
        case "miercoles":
            parrafo.innerText = "A mitad de camino";
        break;
        case "jueves":
            parrafo.innerText = "Casi fin de semana";
            break;
        case "viernes":
            parrafo.innerText = "FIN DE SEMANA";
            break;
        case "sabado":
            parrafo.innerText = "Hoyyyy se descansaaaa!";
            break;
        case "domingo":
            parrafo.innerText = "Ya mañana es lunes T-T";
            break;
        default:
            parrafo.innerText = "No sabemos que día es";
    }
}