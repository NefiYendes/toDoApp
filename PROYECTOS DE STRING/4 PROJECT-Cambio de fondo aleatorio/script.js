function color() {
    document.body.style.backgroundColor = generarColor();
    document.querySelector("h1").innerText = document.body.style.backgroundColor;
};
function generarColor() {

    let colorR = Math.random() * 256;
    let colorG = Math.random() * 256;
    let colorB = Math.random() * 256;

    return(`rgb(${colorR}, ${colorG}, ${colorB})`);
}