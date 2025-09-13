import { Navbar } from "@/components/Navbar";
import { SimpleGrid,  } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export function Diseno(){

    const fondo ={


     bg:"linear-gradient(135deg, #ffffff 0%, #cccccc 40%, #8a8a8aff 100%)"
  }
    //Aqui va todo lo que se muestra
    return (<>
    
    <SimpleGrid  {...fondo} >
    <Navbar/>

    <Outlet/>
    </SimpleGrid>
    
    
    
    </>)



}