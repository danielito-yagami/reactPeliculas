import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "@/components/ui/provider"
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  //PAra usar chakra UI se tiene que poner primero StrictMode y luego chakra y dentro de chakra todo lo demas
  <StrictMode>
    <Provider>
 
    <App />
   
    </Provider>


  </StrictMode>,
)
