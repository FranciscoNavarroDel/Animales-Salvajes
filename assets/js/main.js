import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipodeanimal.js"
import crearTarjetas from "./tarjetas/creartarjeta.js"
import consultarDatosAnimales from "./imagen_audio_animales.js"

let instanciasAnimales = { "Leon": Leon, "Lobo": Lobo, "Oso": Oso, "Serpiente": Serpiente, "Aguila": Aguila }
let botonAgregarInformacion = document.getElementById("btnRegistrar");
let animalesCreados = []

// llama a la funcion que consulta la informacion de los animales desde mi json y los pasa al HTML
consultarDatosAnimales()

botonAgregarInformacion.addEventListener("click", async() => {
    try {

        let nombreAnimalSeleccionado = document.querySelector("#animal").value
        let edadEstimada = document.querySelector("#edad").value
        let comentariosIngresados = document.querySelector("#comentarios").value

        // se comprueba que el nombre la edad y los comentarios hallan sido seleccionados 
        if (edadEstimada == "Seleccione un rango de años" || comentariosIngresados == "" || nombreAnimalSeleccionado == "Seleccione un animal") {
            // en caso de que no hallan sido seleccionados se arroja un error
            throw new Error("Complete todos los campos")
        }

        // se obtiene la informacion que fue pasada al DOM de Audio y imagen
        // se realiza un split (/) se obtiene [url("assets,imgs,Leon.png")]
        let urlImagen = document.querySelector("#preview").style.backgroundImage.split("/")[2];
        let imagenDelAnimalSeleccionado = urlImagen.slice(0, -2)
        let sonidoAnimalSeleccionado = document.getElementById("contenedor_sonido").dataset.sonido

        // se crea y se pushea la nueva instancia del animal al arreglo antes definido
        animalesCreados.push(new instanciasAnimales[`${nombreAnimalSeleccionado}`](nombreAnimalSeleccionado, edadEstimada, imagenDelAnimalSeleccionado, comentariosIngresados, sonidoAnimalSeleccionado))

        // se llama a la funcion para crear las tarjetas de todos los animales que se han instanciado
        crearTarjetas(animalesCreados)


        // Se limpian los campos del formulario una vez que se ha creado la tarjeta del animal
        document.querySelector("#animal").value = "Seleccione un animal"
        document.querySelector("#edad").value = "Seleccione un rango de años"
        document.querySelector("#comentarios").value = ""
            // document.querySelector("#player").innerHTML = ""
        document.querySelector("#preview").style.backgroundImage = `url("assets/imgs/lion.svg")`

    } catch (error) {
        alert(error);
    }
});


window.activarsonido = (indice) => {
    // Se busca el animal en el arreglo de animales creados 
    let animal = animalesCreados[indice]

    // Se compara y se ejecuta el metodo del animal que coincida con el nombre del animal seleccionado 
    // Se pasa una etiqueta de audio con autoplay
    if (animal.Nombre == "Leon") {
        animal.Rugir()
    } else if (animal.Nombre == "Lobo") {
        animal.Aullar()
    } else if (animal.Nombre == "Oso") {
        animal.Gruñir()
    } else if (animal.Nombre == "Serpiente") {
        animal.Sisear()
    } else {
        animal.Chillar()
    }
};

window.mostrarPantallaModal = (indice) => {
    // se muestra la pantalla modal
    $("#exampleModal").modal("show")

    // se trae el contenedor se limpia y se agrega la tarjeta del animal correspondiente
    let contenedorModal = document.querySelector(".modal-body")
    let animal = animalesCreados[indice]
    contenedorModal.innerHTML = ""
    contenedorModal.innerHTML = `<div class="card">
                                     <img class="card-img-top" src="assets/imgs/${animal.Img}" alt="Card image cap">
                                    <div class="card-body text-center container bg-dark text-white ">
                                        <p class="card-text ">${animal.Edad}</p>
                                        <p class="card-text">Comentarios</p>
                                        <hr class=border-white>
                                        <p class="card-text">${animal.Comentarios}</p>
                                    </div>
                                </div>`
}