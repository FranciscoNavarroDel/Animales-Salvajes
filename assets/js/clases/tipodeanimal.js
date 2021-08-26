import Animal from "./animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {
        let contenedorSonido = document.querySelector("#contenedor_sonido")
        contenedorSonido.innerHTML = ""
        contenedorSonido.innerHTML = `<audio class="d-none" autoplay><source src="assets/sounds/${this.Sonido}" type="audio/mpeg" /></audio>`
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar() {
        let contenedorSonido = document.querySelector("#contenedor_sonido")
        contenedorSonido.innerHTML = ""
        contenedorSonido.innerHTML = `<audio class="d-none" autoplay><source src="assets/sounds/${this.Sonido}" type="audio/mpeg" /></audio>`
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir() {
        let contenedorSonido = document.querySelector("#contenedor_sonido")
        contenedorSonido.innerHTML = ""
        contenedorSonido.innerHTML = `<audio class="d-none" autoplay><source src="assets/sounds/${this.Sonido}" type="audio/mpeg" /></audio>`
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear() {
        let contenedorSonido = document.querySelector("#contenedor_sonido")
        contenedorSonido.innerHTML = ""
        contenedorSonido.innerHTML = `<audio class="d-none" autoplay><source src="assets/sounds/${this.Sonido}" type="audio/mpeg" /></audio>`
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar() {
        let contenedorSonido = document.querySelector("#contenedor_sonido")
        contenedorSonido.innerHTML = ""
        contenedorSonido.innerHTML = `<audio class="d-none" autoplay><source src="assets/sounds/${this.Sonido}" type="audio/mpeg" /></audio>`
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }