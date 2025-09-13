import {Link} from 'react-router-dom'
import { Grid, GridItem, Box, Heading, Image, Button, SimpleGrid, Center , AspectRatio} from '@chakra-ui/react'
import { BiBorderRadius } from 'react-icons/bi'
import { RiMovieFill } from "react-icons/ri";
//Aqui solo se exporta la funcion y se usa en el APP.JSX 
export function PeliculaITEM(pelicula){

  //Usando esto para poner bordes de caja
  const border = {


    border :'#000000 solid 2px',
    boxShadow : '2px 2px 9px 2px #000000',
    borderRadius:"10px"
    
  }

  //USando chakra UI
    return (<Box m={4} {...border} bg="#000">
        
        
      <Box>
        <Heading as="h2" textAlign={'center'} mb="10px" color="white">{pelicula.titulo}</Heading>
        <Center>
        <Link to={'/detalles/'+pelicula.id}>
        <Button colorPalette='red'><RiMovieFill/> Ver detalles</Button>
        </Link>
        </Center>
      <Box h="300px" w="100%" overflow="hidden" borderRadius="md">
      <AspectRatio ratio={16 / 9} w="100%" h="100%">
      <Image
      src={pelicula.imagen || fallbackImg}
      alt={pelicula.titulo}
      objectFit="cover"
      borderRadius="md"
      />
    </AspectRatio>
    </Box>


        
        </Box>
        
     </Box>


      


        
        )


}