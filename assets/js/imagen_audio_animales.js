import datosAnimales from "./consulta.js"

const consultarDatosAnimales = () => {
    let selectorAnimal = document.getElementById("animal")
    let contenedordeAudio = document.getElementById("contenedor_sonido")


    selectorAnimal.addEventListener("change", async() => {

        let { animales } = await datosAnimales.getdatos()
        let nombreAnimalSeleccionado = selectorAnimal.value
        let informacionAnimal = animales.find(({ name }) => name == nombreAnimalSeleccionado);

        let contenedorImg = document.getElementById("preview");
        contenedorImg.style.backgroundImage = `url(assets/imgs/${informacionAnimal.imagen})`

        contenedordeAudio.dataset.sonido = informacionAnimal.sonido

    })
}

export default consultarDatosAnimales