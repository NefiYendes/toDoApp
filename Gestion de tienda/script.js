const names = document.getElementById('name');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const searchP = document.getElementById('search');
const tabla = document.querySelector('table');
const cuerpo = document.querySelector('table tbody');
const envia = document.getElementById('enviar');

let productos = [];
let productoIdCounter = 0;

envia.addEventListener('click', (event) => {
    event.preventDefault();

    const nombre = names.value.trim();
    const precio = price.value.trim();
    const cantidad = parseInt(quantity.value.trim(), 10);

    if (nombre && precio && !isNaN(cantidad)) {
        const productoExistente = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

        if (productoExistente) {

            productoExistente.cantidad += cantidad;
        } else {
  
            const producto = { id: productoIdCounter++, nombre, precio, cantidad };
            productos.push(producto);
        }

        names.value = '';
        price.value = '';
        quantity.value = '';

        actualizarTabla();
    } else {
        alert('Por favor, complete todos los campos correctamente');
    }
});

searchP.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    filtrarProductos(query);
});

function actualizarTabla() {
    cuerpo.innerHTML = '';

    productos.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id + 1}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'nombre', this)">${producto.nombre}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'precio', this)">${producto.precio}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'cantidad', this)">${producto.cantidad}</td>
            <td><button class="btn btn-danger" onclick="eliminar(${producto.id})">Eliminar</button></td>
        `;
        cuerpo.appendChild(row);

        if (producto.cantidad < 5) {
            row.style.backgroundColor = 'yellow';
        } else {
            row.style.backgroundColor = 'blue';
        }

        setTimeout(() => {
            row.style.backgroundColor = '';
        }, 1000);
    });
}

function filtrarProductos(query) {
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query)
    );

    cuerpo.innerHTML = '';

    productosFiltrados.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id + 1}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'nombre', this)">${producto.nombre}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'precio', this)">${producto.precio}</td>
            <td contenteditable="true" onBlur="actualizarProducto(${producto.id}, 'cantidad', this)">${producto.cantidad}</td>
            <td><button class="btn btn-danger" onclick="eliminar(${producto.id})">Eliminar</button></td>
        `;
        cuerpo.appendChild(row);
    });
}

function eliminar(id) {
    productos = productos.filter(producto => producto.id !== id);
    actualizarTabla();
}

function actualizarProducto(id, campo, elemento) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto[campo] = elemento.innerText.trim();
    }
}
