const precio = document.getElementById("precio");
const parrafo = document.getElementById("parrafo");

let preciov;
let resultado;

function calcular(event) {
    event.preventDefault();
    mostrar();
}
function mostrar() {
    parrafo.classList.add("mostrar");
}
function oferta() {
    preciov = precio.value;
    
    if(preciov >= 1 && preciov <= 50) {
        let resultado = preciov - (preciov * 0.10);
        parrafo.innerText = `Hay una oferta del 10% para productos de $${preciov}. El producto te quedaría en $${resultado}`;
    }else if(preciov >= 51 && preciov <= 100) {
        let resultado = preciov - (preciov * 0.15);
        parrafo.innerText = `Hay una oferta del 15% para productos de $${preciov}. El producto te quedaría en $${resultado}`;
    }else {
        let resultado = preciov - (preciov * 0.25);
        parrafo.innerText = `Hay una oferta del 25% para productos de $${preciov}. El producto te quedaría en $${resultado}`;
    }
}

