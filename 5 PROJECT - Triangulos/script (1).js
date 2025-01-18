const imagem = document.getElementById("imagen");
let tipo;
const p = document.getElementById("parrafo");
function clasificar(event) {
    event.preventDefault();

    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;  
    
    
    if (lado1 == lado2 && lado2 == lado3) {

        p.innerText = `Tu triangulo es uno del tipo Equilatero, \n pues, sus tres lados son iguales.`;
        tipo = "equilatero";

    } else if (((lado1 == lado2) && (lado3 != lado2)) || ((lado1 == lado3) && (lado2 != lado1)) || (lado2 == lado3) && (lado1 != lado2)){

        p.innerText = `Tu triangulo es del tipo isóceles, \n ya que 2 lados son iguales mientras que el restante es diferente.`;
        tipo = "isóceles";

    } else {

        p.innerText = `Tu triangulo es del tipo escaleno, \n porque todos sus lados tienen longitudes diferentes.`;
        tipo = "escaleno";

    }

    mostrar();

}

function mostrar() {

    p.classList.add("mostrar");
    imagem.className = `imagen ${tipo}`;

}

function ocultar() {

    p.classList.remove("mostrar");
    imagem.className = `imagen`;

}