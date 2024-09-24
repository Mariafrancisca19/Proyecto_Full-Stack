import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Estilos/index.css'
import Rutas from './Rutas/Rutas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Rutas/>
  </StrictMode>,
)
