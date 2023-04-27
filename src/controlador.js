import { pedirToken } from "../services/servicioSpotify.js";
import { buscarCancion } from "../services/servicioConsultarCasnciones.js";


let token=pedirToken().then(function(token) {
    console.log(token);

    buscarCancion(token).then(function(canciones){
        console.log(canciones.tracks);
    })
})

