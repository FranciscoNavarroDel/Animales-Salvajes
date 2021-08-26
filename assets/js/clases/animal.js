class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this._getNombre = () => _nombre;
        this._getEdad = () => _edad;
        this._getImg = () => _img;
        this._getSonido = () => _sonido;

        this._getComentarios = () => _comentarios
        this._setComentarios = (newcomentario) => _comentarios = newcomentario
    }

    get Nombre() {
        return this._getNombre()
    }

    get Edad() {
        return this._getEdad()
    }

    get Img() {
        return this._getImg()
    }

    get Sonido() {
        return this._getSonido()
    }


    get Comentarios() {
        return this._getComentarios()
    }

    set Comentarios(newcomentario) {
        this._setComentarios(newcomentario)
    }

}


export default Animal