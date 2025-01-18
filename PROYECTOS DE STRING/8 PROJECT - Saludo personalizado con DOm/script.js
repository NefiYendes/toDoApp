function saludar(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    document.getElementById("parrafo").innerText = `¡Hola, ${nombre}!`; 
}