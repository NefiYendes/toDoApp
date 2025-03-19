const principal = document.getElementById("num")
const secundario = document.getElementById("num2")
const terciario = document.getElementById("num3")
const parrafo = document.getElementById("parrafos")
const resultados = document.getElementById("resultados")

function calcular(event){
    event.preventDefault();
    let num1 = Number(principal.value)
    let num2 = Number(secundario.value)
    let num3 = Number(terciario.value)
    resultados.innerHTML = "";
    for(let i = num2; i <= num3; i++){
    const fila = document.createElement("tr");
    const operation = document.createElement("td");
    operation.textContent = `${num1} x ${i}`;

    const resultado = document.createElement("td")
    resultado.textContent = `${num1 * i}`;

    fila.appendChild(operation);
    fila.appendChild(resultado);
    resultados.appendChild(fila);
}
parrafo.style.display = "flex";
}