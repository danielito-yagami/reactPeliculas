//Importando React Player 
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react"
import {Spinner, Box, Text, Heading, Image, Center, Spacer, Stack, SimpleGrid, AspectRatio, Badge, HStack} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { API_Peliculas } from "../services/data"
import {fecha} from "../utils/pipeFecha"
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { Icon } from '@chakra-ui/react'
import { GrLanguage } from "react-icons/gr";
import { SiStylelint } from "react-icons/si";
import { FaGrav } from "react-icons/fa";
import  load from "../assets/img/gifs/load.gif"
export function PeliculaDetalle(){


    //Para usar los parametros se usa la funcion useParams

    let params = useParams()

    let {peliculaId} = params

    //A consumir el servicio de la clase API Peliculas

    //Definiendo los hooks 

    const [pelicula, setPelicula] = useState()

    const url = "https://api-peliculas-ke2z.onrender.com/api/peliculas"

    //Usando el hook use effect para consumir de la api las peliculas 

    useEffect(()=>{

    const getPelicula = async()=>{

        try{

            const api = new API_Peliculas(url)

            const result = await api.getPeliculaBYID(peliculaId)

            setPelicula(result)

        }catch(error){

            console.error(error.message)
        }


    }

    getPelicula()


    },[peliculaId])

   
    //Usando un render opcional para evitar errores de pintando antes de la respuesta de la api 

    //Para mostrar videos de youtbe no sirve el tag de video html5 se tiene que usar react player para reproducir videos
    //console.log(pelicula.video)

    const fondo ={

         bg:"linear-gradient(135deg, #000000ff 0%, #1d1d1dff 40%, #333333ff 100%)",
         borderRadius:"20px"
    }

    const color ={

        color:"white"


    }

    const box ={

        borderRadius:"20px",
        boxShadow:"2px 4px 1px 4px #000",
        bg:"white",
        padding:"20px"

    }

    console.clear()

    return (<>
    
    {pelicula ? (

        <SimpleGrid {...color} columns={[1, null, 2]}  minH={["130vh",'130vh','100vh']} spacing={4}{...fondo} fontSize={["10px","14px","20px"]} marginBottom={3} m="1%">
        <Box >
        <Heading m={3}textAlign={'center'} fontSize={['2xl','3xl','4xl']}  mt={3} p={2}>{pelicula.titulo}</Heading>
        <Text textAlign={'center'} >
          Genero: <Icon as={FaGrav}/>   <Badge fontSize={['md','lg','xl']} colorPalette="green">{pelicula.genero}</Badge>
          <br />
        </Text>  
            
        <Text textAlign={'center'}>
            Idioma: <Icon as={GrLanguage}/>  <Badge fontSize={['md','lg','xl']} colorPalette={'cyan'}>{pelicula.idioma}</Badge> 
            <br />
        </Text> 
        <Text textAlign={'center'}>   
            Estreno: <Icon as={SiStylelint}/> <Badge fontSize={['md','lg','xl']} colorPalette={'orange'}>{fecha(pelicula.estreno)}</Badge>
            <br /> 
        </Text>
   
            <Text textAlign={'center'}>   
           
            Pais:  <Icon as={BsFlagFill} mr={2} /> <Badge fontSize={['md','lg','xl']} colorPalette={'purple'}>{(pelicula.pais)}</Badge>   
            </Text>
        
      
        <br />
        
       
       <Center mt={3}>
  <Box
    width={["300px", "400px", "450px"]}
    height={["300px", "400px", "450px"]}
    overflow="hidden"
    borderRadius="20px"
    
    
    p={4}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Image
    boxShadow="8px 8px 0 #2D3748"
      src={pelicula.imagen}
      alt={pelicula.imagen}
      maxW="100%"
      maxH="100%"
      objectFit="contain"
    />
  </Box>
</Center>

        <Text fontStyle={'italic'} textAlign={'center'}>Sinopsis: {pelicula.sinopsis}</Text>
        </Box>
         
         <Box>
         <Center>
        <HStack display="flex" fontSize={["2xl","3xl","4xl"]} fontWeight={'bold'} m={3} p={3}>
       <BiSolidCameraMovie/>Ver trailer
            
        </HStack>
        
       
        </Center>
     
        <Center>
        <Box width={["300px","500px","700px"]} >
            <AspectRatio ratio={16/9}>
            <ReactPlayer src={pelicula.video} controls width="100%" height="100%"/>
            </AspectRatio>
        </Box>
        
        </Center>
        </Box>
        
        </SimpleGrid>
      
        

    ):(
        <Center><Image src={load}/></Center>
      
    
    )

    }
    
    </>)


}