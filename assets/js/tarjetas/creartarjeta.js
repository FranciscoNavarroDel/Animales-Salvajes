const crearTarjeta = (animalesCreados) => {

    // Extraemos el contenedor de las tarjetas de los animales del Doom.
    let contenedorDeTarjetas = document.querySelector("#Animales")

    // Se limpia cada vez que se crea una nueva tarjeta
    contenedorDeTarjetas.innerHTML = ""

    // se recorre el arreglo con las instancias de los animales creados y se guarda una tarjeta por cada uno de ellos
    animalesCreados.forEach((animal, indice) => {

        // Se realiza un onclick para Mostrar la PantallaModal y Activar sonido
        contenedorDeTarjetas.innerHTML += `<div class="card col-12 col-sm-3 p-0  ml-sm-3  mt-3">
                                                <div style="background-image: url(assets/imgs/${animal.Img})"  class="imagentarjeta ${animal.Nombre}" onclick=mostrarPantallaModal("${indice}")></div>
                                                    <div class="card-body bg-secondary py-1">
                                                        <button style="background-image: url(assets/imgs/audio.svg)" class="imagenAudio bg-secondary" onclick=activarsonido("${indice}")> </button>
                                                    </div>
                                           </div>`
    });
}

export default crearTarjeta