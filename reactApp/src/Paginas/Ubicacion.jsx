import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Footer from '../Componentes/Footer'
import Maps from '../Componentes/Maps'


const Ubicacion = () => {
  return (
    <div>
      <MenuNav/>
      <h3 style={{fontFamily:'-moz-initial', marginTop:'50px'}}>NOS PUEDES ENCONTRAR EN </h3>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default Ubicacion
