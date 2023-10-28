const productos = [
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "3",
        distancia: "12"
    },
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "4",
        distancia: "12"
    },
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "4",
        distancia: "12"
    },
];


for (let i = 1; i <= 50; i++) {
    const randomCapacidad = Math.floor(Math.random() * 10) + 1; // Capacidad aleatoria entre 1 y 10
    const randomDistancia = Math.floor(Math.random() * 20) + 1; // Distancia aleatoria entre 1 y 20

    const producto = {
        titulo: `Casa ${i}`,
        imagen: `https://picsum.photos/800/600?random=${i}`, // URL de imagen aleatoria
        direccion: `Dirección ${i}`,
        capacidad: `${randomCapacidad}`,
        distancia: `${randomDistancia}`
    };

    productos.push(producto);
}



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
                <a href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
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
