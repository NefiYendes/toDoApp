document.addEventListener("DOMContentLoaded", () => {
    const obj = document.getElementById('precioSueter');
    const obj1 = document.getElementById('precioPant');
    const obj2 = document.getElementById('precioSueter1');
    const obj3 = document.getElementById('gorra');
    const input = document.getElementById('edad');
    const mainSection = document.getElementById('main-section');

    const preciosOriginales = [
        Number(obj.textContent),
        Number(obj1.textContent),
        Number(obj2.textContent),
        Number(obj3.textContent)
    ];

    let products = Array.from(mainSection.children);

    function updateProductNumbers() {
        products.forEach((product, index) => {
            const numberElement = product.querySelector('.product-number');
            if (numberElement) {
                numberElement.textContent = index + 1;
            }
        });
    }

    function agregar(event) {
        event.preventDefault();

        let edad = Number(input.value);
        if (input.value == "" || isNaN(edad)) {
            alert("Por favor, ingrese una edad válida.");
        } else {
            products.forEach((product, index) => {
                const priceElement = product.querySelector('p');
                const originalPrice = preciosOriginales[index];
                let newPrice = originalPrice;

                if (edad < 12) {
                    newPrice = originalPrice * 0.5;
                }

                priceElement.textContent = `Precio: $${newPrice}`;
            });
        }
    }

    function addProduct(event) {
        event.preventDefault();

        const name = prompt("Ingrese el nombre del producto:");
        const imgUrl = prompt("Ingrese la URL de la imagen del producto:");
        const price = prompt("Ingrese el precio del producto:");
        const description = prompt("Ingrese la descripción del producto (opcional):");

        if (!name || !imgUrl || !price || isNaN(price)) {
            alert("Por favor, rellene todos los campos obligatorios (Nombre, URL, Precio) con valores válidos.");
            return;
        }

        const productDiv = document.createElement("div");
        productDiv.classList.add("sueter", "product");

        productDiv.innerHTML = `
            <div class="product-number"></div>
            <figure>
                <img src="${imgUrl}" alt="Imagen de ${name}">
                <figcaption>${name}</figcaption>
            </figure>
            <p>Precio: $${price}</p>
            <p>${description}</p>
            <button class="comprar">Comprar</button>
        `;

        mainSection.insertAdjacentElement("afterbegin", productDiv);
        products.unshift(productDiv);

        preciosOriginales.unshift(Number(price));

        updateProductNumbers();
    }

    function deleteProduct(event) {
        event.preventDefault();

        const productNumber = prompt("Ingrese el número del producto que desea eliminar:");

        if (!productNumber || isNaN(productNumber) || productNumber < 1 || productNumber > products.length) {
            alert("Número de producto inválido.");
            return;
        }

        const index = productNumber - 1;
        mainSection.removeChild(products[index]);
        products.splice(index, 1);

        preciosOriginales.splice(index, 1);

        updateProductNumbers();
    }

    document.getElementById('add').addEventListener('click', addProduct);
    document.getElementById('remove').addEventListener('click', deleteProduct);
    document.querySelector('footer button').addEventListener('click', agregar);
});
