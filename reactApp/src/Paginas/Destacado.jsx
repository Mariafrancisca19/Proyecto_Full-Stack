import React, { useEffect, useState } from 'react'
import Atras from '../Componentes/Atras'
import MenuNav from '../Componentes/MenuNav'
import Footer from '../Componentes/Footer'
import { obtenerDatos } from '../JS/Fetch'
import ContenedorCard from '../Componentes/ContenedorCard'
// import { Card } from 'react-bootstrap'


const Destacado = () => {
  
  const [data, setData] = useState ([])
  const [servicio, setServicio] = useState(null)
 // traer el home los servicios 
  useEffect(()=>{
    const servicio = async () =>{
      const data = await obtenerDatos("servicio/")
      console.log(data)
      setData(data)
    }
    servicio()
  },[])


  return (
    
    <div>
      <MenuNav/>
      
      <div>
          <ContenedorCard getServicio={data} mostrarBotones={true}  />
      </div>
  
      <Atras/>
      <Footer/>
    </div>

  )
}

export default Destacado
