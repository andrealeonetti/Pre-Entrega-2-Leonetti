var productos = [
    { nombre: "torta", precio: 10000 },
    { nombre: "cupcakes", precio: 850 },
    { nombre: "cookies", precio: 700 },
    { nombre: "paletas", precio: 1200 },
    { nombre: "oreo bañadas", precio: 350 }
];

let carrito = [];
let total = 0; // Variable para llevar la suma total.

// Agregamos nuevoProducto a la lista de productos
productos.push({ nombre: "Mini Cake", precio: 2500 });

const arrayDeClientes = [
    {
        nombre: "Ana",
        edad: 24,
        productoFavorito: "torta",
    },
    {
        nombre: "Juan",
        edad: 35,
        productoFavorito: "cookies",
    },
    {
        nombre: "Sofia",
        edad: 16,
        productoFavorito: "Mini Cake",
    },
];

console.log(arrayDeClientes);

for (let i = 0; i < arrayDeClientes.length; i++) {
    console.log("Nombre: " + arrayDeClientes[i].nombre);
    console.log("Edad: " + arrayDeClientes[i].edad);
    console.log("Producto Favorito: " + arrayDeClientes[i].productoFavorito);
}

let seleccion = prompt("¿Quieres llevar algún producto hoy?");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor, responde 'si' o 'no'");
    seleccion = prompt("¿Deseas hacer un pedido?");
}

if (seleccion === "si") {
    alert("Puedes elegir entre estos productos:");
    let todosLosProductos = productos.map((producto) => `${producto.nombre} - ${producto.precio}$`);
    alert(todosLosProductos.join("\n"));

    let productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito:");

    while (productoElegido) {
        const productoEncontrado = productos.find((producto) => producto.nombre === productoElegido);

        if (productoEncontrado) {
            carrito.push({ nombre: productoElegido, precio: productoEncontrado.precio });
            total += productoEncontrado.precio; // Agrega el precio al total
            alert(`${productoElegido} se ha añadido al carrito.`);
        } else {
            alert("El producto no existe en nuestro catálogo.");
        }

        productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito (o deja el campo en blanco para finalizar):");
    }

    alert("Tu carrito de compras:");
    for (const producto of carrito) {
        alert(`${producto.nombre}: ${producto.precio}$`);
    }

    alert(`Suma total: ${total}$`); // Sumatoria total del carrito
} else {
    alert("Gracias por visitarnos. ¡Hasta luego!");
}
