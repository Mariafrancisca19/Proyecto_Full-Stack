import React from 'react'
import Atras from '../Componentes/Atras'
import MenuNav from './MenuNav'
import Footer from './Footer'
import Formulario from './Formulario'


const Info = () => {
  return (
    <div>
     <MenuNav/>
      <h1>Necesitas ayuda?</h1>
      <h2>Contáctanos</h2>
      <h3>Dar seguimiento a mi proceso</h3>
      <a href="https://www.whatsapp.com/">WhatsApp (Contacta a tu asesor)</a>
      <Formulario/>

      <Atras/>
      <Footer/>
    </div>
  )
}

export default Info
