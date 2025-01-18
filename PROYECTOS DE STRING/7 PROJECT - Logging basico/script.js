function iniciar(event) {
    event.preventDefault();

    let name = document.getElementById("nombre").value;
    let lastName = document.getElementById("apellido").value;
    let usuario = document.getElementById("usuario").value;
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("parrafo").innerText = `Nombre: ${name}
    Apellido: ${lastName}
    Nombre de usuario: ${usuario}
    Correo: ${mail}
    Contraseña: ${password}`;
}
function activar() {
    document.body.classList.toggle("lightMode");
}