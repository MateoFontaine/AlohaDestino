const productos = [
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "3",
        distancia: "12",
        informacion: "assets/casas/casa-01.html"
    },
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const inputCapacidad = document.querySelector("#inputCapacidad");
const btnBuscar = document.querySelector("#btnBuscar");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-txt">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <div class="data-card">
                <i class="producto-direc fa-solid fa-location-dot"></i>
                <p class="producto-direcccion">${producto.direccion}</p>
            </div>
            <div class="data-card">
                <i class="producto-cant fa-solid fa-bed"></i>
                <p class="producto-personas">${producto.capacidad} Personas</p>
            </div>
            <div class="data-card">
                <i class="producto-dist fa-solid fa-umbrella-beach"></i>
                <p class="producto-distancia">${producto.distancia} KM</p>
            </div>
            <div class="arrow">
                <a href="${producto.informacion}"><i class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
        </div>
        `;
        contenedorProductos.append(div);
    });
}

function buscarPorCapacidad() {
    const valorBuscado = inputCapacidad.value.toLowerCase();

    const productosCoincidentes = productos.filter(producto => producto.capacidad.toLowerCase().includes(valorBuscado));

    cargarProductos(productosCoincidentes);
}

btnBuscar.addEventListener("click", buscarPorCapacidad);


// Cargar todas las casas al cargar la página
cargarProductos(productos);



inputCapacidad.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        buscarPorCapacidad();
    }
});




document.addEventListener("DOMContentLoaded", function() {
    // Mostrar pantalla inicial
    const pantallaInicial = document.getElementById("pantalla-inicial");
    setTimeout(function() {
        pantallaInicial.style.display = "none";

        // Mostrar el índice
        const navegador = document.getElementById("navegador");
        navegador.style.display = "block"
        const contenedorProductos = document.getElementById("contenedor-productos");
        contenedorProductos.style.display = "block";
    }, 3000); // Cambia el valor (en milisegundos) a la cantidad de tiempo que deseas mostrar la pantalla inicial
});