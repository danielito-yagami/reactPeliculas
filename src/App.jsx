
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import {PeliculaList} from '../src/components/PeliculaList'
import { PeliculaDetalle } from "./components/PeliculaDetalle"
import {Box} from '@chakra-ui/react'
import {Diseno} from './layouts/Diseno'
import { PeliculaSearch } from "./components/PeliculaSearch"

//Importando del modulo de la clase

//Aqui se crea una funcion Ruteadora 

function Rutas(){
//Esta cosa es el outlet para las rutas como la navbar siempre se va a renderizar estas cosas de abajo si cambia depende 
// de los links o rutas
  //Aqui van las rutas 
 
 return createBrowserRouter(

    createRoutesFromElements(
      //Aqui se dibuja este componente dentro de cualquier ruta hija
      <Route path="/" element={<Diseno/>}>
     
          <Route index element={<PeliculaList/>}/>
          <Route path="/detalles/:peliculaId" element={<PeliculaDetalle/>}/>
          <Route path="/search" element={<PeliculaSearch/>}/>
      </Route>
    ))
}



//Creando la function app el primer componente 

export function App(){

  //Aqui se definio el nombre del id de pelicula por item
  /*
  return (

    //Usando chakra ui para meter todo dentro de un elemento de chakra 
    <>
    <Header/>
    
    <Box ml="15%" mr="15%" mt="50px">
   <Routes>
      <Route path='/' element ={<PeliculaList/>}/>
      <Route path="/detalles/:peliculaId" element={<PeliculaDetalle/>}/>
    </Routes>

    </Box>
 
   
    </>



  )
*/
const rutas = Rutas()

return (

<RouterProvider router={rutas}/>)


}
//Esta linea importa todo 
//export default App