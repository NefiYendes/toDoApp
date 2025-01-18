function calcular(event) {
    event.preventDefault();
    document.getElementById("parrafos").style.display = "flex";
    
    let num = document.getElementById("num").value;

    document.getElementById("p1").innerText = `${num} x 1 = ${num * 1}`;
    document.getElementById("p2").innerText = `${num} x 2 = ${num * 2}`;
    document.getElementById("p3").innerText = `${num} x 3 = ${num * 3}`;
    document.getElementById("p4").innerText = `${num} x 4 = ${num * 4}`;
    document.getElementById("p5").innerText = `${num} x 5 = ${num * 5}`;
    document.getElementById("p6").innerText = `${num} x 6 = ${num * 6}`;
    document.getElementById("p7").innerText = `${num} x 7 = ${num * 7}`;
    document.getElementById("p8").innerText = `${num} x 8 = ${num * 8}`;
    document.getElementById("p9").innerText = `${num} x 9 = ${num * 9}`;
    document.getElementById("p10").innerText = `${num} x 10 = ${num * 10}`;

}