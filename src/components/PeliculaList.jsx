
import { useEffect, useState } from "react"
import { API_Peliculas } from "../services/data"
import { PeliculaITEM } from "./PeliculaItem"

import { SimpleGrid, Center, Image, Box } from "@chakra-ui/react"
import loading from "../assets/img/gifs/load.gif"
export function PeliculaList(){


    //usando los hooks y dice el profe corcehtes porque se va a usar un array de elemento
  const [peliculas, setPeliculas] = useState([])

  const url = "https://api-peliculas-ke2z.onrender.com/api/peliculas"


  //usando useEffect 
  useEffect(()=>{

    

    //Como useEffect no puede recibir una funcion asincrona entonces hago una funcion flecha para poder 
    //hacer esto asincrono

    const getPeliculas = async()=>{

      try{

      const api = new API_Peliculas(url)

      const resultado = await api.getPeliculas()

      //console.log(resultado)
      setPeliculas(resultado || [])
      }
      catch(error){


        console.error(error.message)
        
      }

    }
    //Aqui se ejecuta la funcion de get Peliculas 
    getPeliculas()


/*
fetch("http://localhost:3000/api/peliculas")
    .then((res) => res.json())
    .then((data) => {
      console.log("Películas directas:", data);
      setPeliculas(data.peliculas || data); // según formato
    })
    .catch((err) => console.error("Error directo:", err.message));
*/


  },[])

  


 


  //Esto es un fragment
  return (
    //usando un Fragment
    //USando map para recorre un arreglo y poder listar propiedades

    //Usando un gif animado para el loading de la carga de las peliculas usando fecth para terminar la
    //promesa
<>
   {peliculas.length === 0 ? (<Center bg="#FFF" minH={'60vh'} ><Image src={loading}/> </Center>) : (

    <SimpleGrid columns={[1,2,4]}spacing={20} minChildWidth={250} mr="5%" ml="5%"> 
 {
 peliculas.map(pelicula =>(

  //Aqui va la rejilla y dentro solo mapeo por tarjeta con un box 

  <Box
              key={pelicula.id}
              maxW="300px"
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
            >
              <PeliculaITEM {...pelicula} />
            </Box>

 ))
 }
</SimpleGrid>

   )}
  
</>
// fin del return
  )

//fin de la funcion
}