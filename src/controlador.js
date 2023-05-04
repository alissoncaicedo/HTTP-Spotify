import { pedirToken } from "../services/servicioSpotify.js";
import { buscarCancion } from "../services/servicioConsultarCasnciones.js";

let fila = document.querySelector("#fila")
console.log(fila)

pedirToken().then(function(token) {

    buscarCancion(token).then(function(respuesta){

            
            respuesta.tracks.forEach(function(cancion){

                
                let columna = document.createElement("div")
                columna.classList.add("col")

                let tarjeta = document.createElement("div")
                tarjeta.classList.add("card","h-100","shadow")

                let pista=document.createElement("audio")
                pista.classList.add("w-100")
                pista.setAttribute("controls","controls")
                pista.src=cancion.preview_url

                let foto = document.createElement("img")
                foto.classList.add("img-fluid", "w-100")
                foto.src=cancion.album.images[0].url

                let nombre = document.createElement("h4")
                nombre.classList.add("text-center", "fw-bold")
                nombre.textContent=cancion.name

                console.log(tarjeta)

                tarjeta.appendChild(foto)
                tarjeta.appendChild(nombre)
                tarjeta.appendChild(pista)
                columna.appendChild(tarjeta)
                fila.appendChild(columna)
            })
        console.log(respuesta.tracks[0]);
        console.log(respuesta.tracks[0].name);
        console.log(respuesta.tracks[0].preview_url);
        console.log(respuesta.tracks[0].album.images[0].url);
    })
})

