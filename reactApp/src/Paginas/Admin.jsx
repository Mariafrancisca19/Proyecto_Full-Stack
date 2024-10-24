import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Footer from '../Componentes/Footer'
import FormServicio from '../Componentes/FormServicio'
import Administrador from '../Componentes/Administrador'


const Admin = () => {
  return (
    <div>
      <MenuNav/>
      <FormServicio/>

      <Administrador/>
      <Footer/>
    </div>
  )
}

export default Admin
