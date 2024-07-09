const carrito = [];

function solicitarNombre() {
    let nombre = (prompt("Ingrese su nombre"));
    alert("¡Bienvenido " + nombre + " a su ¡Libreria Online!");
}
solicitarNombre();


const ordenarMenorMayor = () => {
    stock.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    const listaPrecios = productos.map(producto => "- " + producto.nombre + " $" + producto.precio);
    alert("Productos en Nuestra Tienda: \n\n" + listaPrecios.join("\n"));
    comprarProductos(listaPrecios);
};

const comprarProductos = (listaPrecios) => {
    let nombreProducto = "";
    let productoCantidad = 0;
    let seguirComprando = false;

    do {
        nombreProducto = prompt("¿Qué producto desea comprar?\n\n" + listaPrecios.join("\n"));
        const producto = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
        
        if (producto) {
            alert("Has elegido " + nombreProducto);
            productoCantidad = parseInt(prompt("Elija la cantidad que desea comprar"));
            agregarAlCarrito(producto, productoCantidad, producto.id);
        } else {
            alert("El Producto elegido no se encuentra en el catálogo");
        };

        seguirComprando = confirm("¿Desea seguir comprando?");
    } while (seguirComprando);
};



const agregarAlCarrito = (producto, productoCantidad, productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId);

    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad;
        carrito.push(producto);
    }
    console.log(carrito);
}


mostrarListaOrdenada();

