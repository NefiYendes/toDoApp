function iniciar(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tag = document.getElementById("tag").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contra").value;

    alert(`Su inicio de sesion fue exitoso!
        Nombre: ${nombre}
        Apellido: ${apellido}
        Nombre de usuario: ${tag}
        Correo electronico: ${correo}
        Contraseña: ${contraseña}
        `)
}