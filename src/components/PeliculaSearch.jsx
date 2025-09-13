import { API_Peliculas } from "@/services/data"
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { SimpleGrid, Center, Image, Link, Button, Flex, Box, Text } from "@chakra-ui/react"
import notFound from "../assets/img/gifs/notFound.gif"
import { PeliculaITEM } from "./PeliculaItem"
export function PeliculaSearch(){

//Obteniendo los parametros de la url

//Aqui uso el hook useParams para obtener los parametros de la url

//Obteniendo el arreglo donde vienen los parametros en la url 

const [searchParams] = useSearchParams()

const filtros  = {

    titulo: searchParams.get('titulo'),
    pais: searchParams.get('pais'),
    idioma: searchParams.get('idioma'),
    genero: searchParams.get('genero')

}

const url = "https://api-peliculas-ke2z.onrender.com/api/peliculas/filtro"

//Usando un hook de estado para obtener las peliculas 

const [peliculas, setPeliculas] = useState([])

useEffect(()=>{

    //Se define la funcion asinscrona post para obtener los resultados

    const getMovies = async () =>{

        try{

            const api = new API_Peliculas(url)

            const respuesta = await api.getPeliculasFiltro(filtros)

            setPeliculas(respuesta || [])

        }catch(error){


            console.log(error.message)
        }

     


    }
   getMovies()

},[searchParams])




return (
  <>
    {Array.isArray(peliculas) && peliculas.length > 0 ? (
      
       <SimpleGrid columns={[1,2,4]}spacing={20} minChildWidth={250} mr="5%" ml="5%"> 
          {peliculas.map(pelicula => (
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
          ))}
        </SimpleGrid>
     
    ) : (
      <Center
        bg="#FFF"
        minH="60vh"
        px="5%"
        flexDirection="column"
        textAlign="center"
      >
        <Text
          fontFamily="heading"
          fontSize={["xl", "2xl", "3xl"]}
          color="gray.600"
          mb={4}
        >
          No se encontró ningún resultado
        </Text>
        <Image
          src={notFound}
          alt="Sin resultados"
          boxSize={["150px", "200px", "250px"]}
          objectFit="contain"
        />
      </Center>
    )}
  </>
);


}