const productos = [
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "4",
        distancia: "12KM"
    },
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "4 personas",
        distancia: "12KM"
    },
    {
        titulo: "Casa 1",
        imagen: "assets/img/casa-1.jpg",
        direccion: "San martin 268",
        capacidad: "4 personas",
        distancia: "12KM"
    },
    // ... (otros objetos)
];

const contenedorProductos = document.querySelector("#contenedor-productos");

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
                    <p class="producto-personas">${producto.capacidad}</p>
                </div>
                <div class="data-card">
                    <i class="producto-dist fa-solid fa-umbrella-beach"></i>
                    <p class="producto-distancia">${producto.distancia}</p>
                </div>
                <div class="arrow">
                        <a href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
            </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);
