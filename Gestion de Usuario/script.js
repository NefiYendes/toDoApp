const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const occupationInput = document.getElementById('occupation');
const tableBody = document.querySelector('table tbody');
const table = document.querySelector('table');

let personas = [];

function agregar(event) {
    event.preventDefault();

    const nombre = nameInput.value.trim();
    const edad = ageInput.value.trim();
    const ocupacion = occupationInput.value.trim();

    if (nombre && edad && ocupacion) {
        const persona = { nombre, edad, ocupacion };
        personas.push(persona);
        nameInput.value = '';
        ageInput.value = '';
        occupationInput.value = '';
        actualizarTabla();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function actualizarTabla() {

    tableBody.innerHTML = '';
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.ocupacion}</td>
        `;
        tableBody.appendChild(row);
    }
}

function mostrar() {
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

table.style.display = 'none';
