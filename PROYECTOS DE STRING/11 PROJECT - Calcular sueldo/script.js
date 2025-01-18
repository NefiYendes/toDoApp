function calcular(event) {
    event.preventDefault(event);
    document.getElementById("parrafo").style.display = "flex";

let num = document.getElementById("num").value;
let price = document.getElementById("number").value;


if(num >= 40) {
document.getElementById("parrafo").innerText = `Trabajaste como un burro esta semana, te tocan $${num * price}`;
}else document.getElementById("parrafo").innerText = `No deberiamos pagarte, pero este es tu sueldo $${num * price}`;
}