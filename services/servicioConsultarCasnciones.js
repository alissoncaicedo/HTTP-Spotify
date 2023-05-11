
export const buscarCancion = async(token) => {
    const URL = "https://api.spotify.com/v1/artists/2jSGzJw0ebJLu7OLVSOcBP/top-tracks?market=US"

    const PETICION ={
        method: 'GET',
        headers: {
            Authorization:token
        }
    }

    let respuesta = await fetch(URL,PETICION)
    let canciones = await respuesta.json()

    return canciones

}