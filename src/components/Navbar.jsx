
import { ButtonGroup, Center, Image, InputGroup, NativeSelect } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Flex, Heading, Box, Button, Text, HStack, Spacer, Stack, Input} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import logo from '../assets/img/movies.png'
import { useState, useEffect } from "react";

import { API_Peliculas } from "@/services/data";

//Usando un hook de estado para obtener el valor del input


//Aqui ya se va a empezar a usar chakra UI


export function Navbar(){

    //Usando el hook para obtener la palabra a buscar del input
    //Hook para obtener los generos de las peliculas 
    //Se inicializa con una cadena vacia 
    const [ftitulo, setfTitulo] = useState("")

    const [fidioma, setfIdioma] = useState("")
    const [fgenero, setfGenero] = useState("")
    const [fpais, setfPais] = useState("")


    //Creando la url dinamica para enviarla con el boton link
    //Y se convierten en string  
    const filtros = new URLSearchParams({


        titulo: ftitulo,
        idioma: fidioma,
        genero: fgenero,
        pais: fpais


    }).toString()

    //Hooks para obtener todos los filtros

    

    const [genero, setGenero] = useState([])
    

    const urlG = "https://api-peliculas-ke2z.onrender.com/api/genero"

    useEffect(()=>{

        const getGeneros = async()=>{

            try{


                const api = new API_Peliculas(urlG)

                const respuesta = await api.getGeneros()

                //Seteando el valor a la variable de estado SET para tener todo el arreglo

                //Para evitar que la app se rompa aunque este roto el servicio de la api
                setGenero(respuesta || [])

            }catch(error){

                console.error(error.message)
            }

        }

        getGeneros()

    },[])


    //Hook para obtener los idiomas
    const [idioma, setIdioma] = useState([])

    const liga = "https://api-peliculas-ke2z.onrender.com/api/idioma"

    useEffect(()=>{

        //Crear la funcion asincrona 
        const getLanguages = async()=>{

            try{

                const api= new API_Peliculas(liga)

                const res = await api.getIdiomas()

                setIdioma(res || [])

            }catch(error){

                console.error(error.message)
            }

        }

        getLanguages()
    },[])

    //Hook para obtener los paises en el front ent

    const [pais,Setpais] = useState([])

    const url = "https://api-peliculas-ke2z.onrender.com/api/pais"

    //Usando fetch para obtener todos los paises

    useEffect(()=>{

        const getPaises = async()=>{

        try{

            const api = new API_Peliculas(url)

            const respuesta = await api.getPaises()

            Setpais(respuesta || [])

        }catch(error){

            console.error(error.message)
        }

        }

      getPaises()


    },[])



    const fondoNavbar = {


        bg: "linear-gradient(135deg, #0a0a0a, #1a1a1a, #2e2e2e, #444444)"

    }

    return (<Flex
  as="nav"
  m="0px"
  alignItems="center"
  flexWrap="wrap"
  {...fondoNavbar}
  mb="50px"
  gap={4}
  px={["4", "6", "8"]}
  py={["3", "4"]}
>
  <Link to={'/'}>
    <Image src={logo} alt="" boxSize={["100px", "150px", "180px"]} />
  </Link>

  <Heading as="h1" color="white" ml={["0", "50px"]}>
    Películas Dax
  </Heading>

  <Spacer />
  <Box display={'flex'}>
  <HStack>
  <Text color="#FFF">Idioma:</Text>
  <NativeSelect.Root
    size="sm"
    bg="white"
    width={["180px", "220px"]}
    ml="20px"
    mr="20px"
  >
    <NativeSelect.Field onChange={event => setfIdioma(event.target.value)}>
      <option value="">Todos los idiomas</option>
      {idioma.map(i => (
        <option key={i.id} value={i.nombre}>
          {i.codigo}
        </option>
      ))}
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
  </HStack>
</Box>


<Box display={'flex'}>
<HStack>
  <Text color="#FFF">Género:</Text>
  <NativeSelect.Root
    size="sm"
    bg="white"
    width={["180px", "220px"]}
    ml="20px"
    mr="20px"
  >
    <NativeSelect.Field onChange={event => setfGenero(event.target.value)}>
      <option value="">Todos los géneros</option>
      {genero.map(g => (
        <option key={g.id} value={g.nombre}>
          {g.nombre}
        </option>
      ))}
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
</HStack>    
</Box>

<Box display={'flex'}>
<HStack>
<Text color="#FFF">País:</Text>
  <NativeSelect.Root
    size="sm"
    bg="white"
    width={["180px", "220px"]}
    ml="20px"
    mr="20px"
  >
    <NativeSelect.Field onChange={event => setfPais(event.target.value)}>
      <option value="">Todos los países</option>
      {pais.map(p => (
        <option key={p.id} value={p.nombre}>
          {p.nombre}
        </option>
      ))}
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
</HStack>
</Box>
  

  <Box minW={["100%", "auto"]}>
    <Stack spacing={4}>
      <InputGroup
        endElement={
          <Link to={`/search?${filtros}`}>
            <Icon as={FaSearch} color="gray.400" />
          </Link>
        }
      >
        <Input
          minWidth="250px"
          placeholder="Buscar Película"
          bg="white"
          type="text"
          variant="subtle"
          onChange={event => setfTitulo(event.target.value)}
        />
      </InputGroup>
    </Stack>
  </Box>

  <HStack spacing="20px">
    <Button>Iniciar Sesión</Button>
  </HStack>
</Flex>
)


}