function saludar(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    alert(`Hola, ${nombre}!`);
}