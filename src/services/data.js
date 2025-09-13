//Aqui van las funciones para exportar los datos de la API usando fetch 
//Creo una clase para importar esto 


export class API_Peliculas{

urlX

constructor(url){

this.urlX = url

}

//usando una clase privada para aplicar el concepto de DRY 
// metodo asincrono para usar la funcion y solo appendizar los parametros
async _getAPI(endpoint){
//usando templates
 

try{
const respuesta = await fetch(`${this.urlX}${endpoint}`) 
if(!respuesta.ok){
    throw new Error("No se pudo conectar al Server")
}
console.log("consultando el endpoint: "+this.urlX)
//console.log(respuesta.json())

return respuesta.json()

}catch(Error){

console.error("El error es "+ Error.message)

return null
}
}
//Puede recibir por defecto un arreglo nulo
async _postAPI(body = {}){

    //Como voy a mandar obejtos por json entonces ya no va a ver un append a la url
    try{

        const respuesta = await fetch(this.urlX,{

            //Aqui viene el tipo de metodo 
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)


        })
        //Si la peticion no llego a la api entonces manda error 

        if(!respuesta.ok){

            throw new Error("No se pudo conectar a la api")
        }
        return respuesta.json()

    }catch(error){


        console.log("El error es :"+error.message)

        return null
        
    }


}


//Aqui uso ya instancias porque se necesitan parametros diferentes a diferencia de Nodejs 
async getPeliculas(){

return this._getAPI("")   

}

//Metodo para obtener pelicula por id
async getPeliculaBYID(id){

    return this._getAPI(`/${id}`)
}

//Metodos de los paises 

async getPaises(){

    return this._getAPI("")
}

async getIdiomas(){

    return this._getAPI("")


}

async getIdiomaBYID(id){

    return this._getAPI(`/${id}`)
}

async getGeneros(){


    return this._getAPI("")
}

async getGeneroBYID(id){

    return this._getAPI(`/${id}`)
}

async getPeliculasFiltro(body){


    return this._postAPI(body)

}

}







