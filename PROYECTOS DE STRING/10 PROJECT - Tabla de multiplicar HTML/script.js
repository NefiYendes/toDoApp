function calcular(event) {
    event.preventDefault(event)
    document.getElementById("tabla").style.display = "flex";
    let num = document.getElementById("num").value;

    document.getElementById("o1").innerText =  `${num} x 1`;
    document.getElementById("r1").innerText =  `${num * 1}`;

    document.getElementById("o2").innerText =  `${num} x 2`;
    document.getElementById("r2").innerText =  `${num * 2}`;

    document.getElementById("o3").innerText =  `${num} x 3`;
    document.getElementById("r3").innerText =  `${num * 3}`;

    document.getElementById("o4").innerText =  `${num} x 4`;
    document.getElementById("r4").innerText =  `${num * 4}`;

    document.getElementById("o5").innerText =  `${num} x 5`;
    document.getElementById("r5").innerText =  `${num * 5}`;

    document.getElementById("o6").innerText =  `${num} x 6`;
    document.getElementById("r6").innerText =  `${num * 6}`;

    document.getElementById("o7").innerText =  `${num} x 7`;
    document.getElementById("r7").innerText =  `${num * 7}`;

    document.getElementById("o8").innerText =  `${num} x 8`;
    document.getElementById("r8").innerText =  `${num * 8}`;

    document.getElementById("o9").innerText =  `${num} x 9`;
    document.getElementById("r9").innerText =  `${num * 9}`;

    document.getElementById("o10").innerText =  `${num} x 10`;
    document.getElementById("r10").innerText =  `${num * 10}`;
}