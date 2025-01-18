function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("parrafo").innerText = `${num1} + ${num2} = ${num1 + num2}`;

}
function restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("parrafo").innerText = `${num1} - ${num2} = ${num1 - num2}`;

}
function multiplicar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    document.getElementById("parrafo").innerText = `${num1} * ${num2} = ${num1 * num2}`;

}
function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("parrafo").innerText = `${num1} / ${num2} = ${num1 / num2}`;

}
function borrar() {
    location.reload();
}