import { pedirToken } from "../services/servicioSpotify.js";
import { buscarCancion } from "../services/servicioConsultarCasnciones.js";


let token=pedirToken().then(function(token) {
    console.log(token);

    buscarCancion(token).then(function(canciones){
        console.log(canciones.tracks[0]);
        console.log(canciones.tracks[0].name);
        console.log(canciones.tracks[0].preview_url);
        console.log(canciones.tracks[0].album.images[0].url);
    })
})

