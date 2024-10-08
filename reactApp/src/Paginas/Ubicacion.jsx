import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Footer from '../Componentes/Footer'
import Maps from '../Componentes/Maps'
import FormServicio from '../Componentes/FormServicio'

const Ubicacion = () => {
  return (
    <div>
      <MenuNav/>
      <h3 style={{fontFamily:'-moz-initial', marginTop:'50px'}}>NOS PUEDES ENCONTRAR EN </h3>
      <Maps/>
      <FormServicio/>
      <Footer/>
    </div>
  )
}

export default Ubicacion
