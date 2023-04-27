
export const buscarCancion = async(token) => {
    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

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