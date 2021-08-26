let datosAnimales = (() => {
    let url = "/animales.json"
    const getdatos = async() => {
        let resp = await fetch(url);
        let data = await resp.json();
        return data
    }
    return { getdatos }
})()


export default datosAnimales