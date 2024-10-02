import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Maps from '../Componentes/Maps'
import Atras from '../Componentes/Atras'
import CarouselMostrar from '../Componentes/CarouselMostrar'
import Footer from '../Componentes/Footer'

const Home = () => {
  return (
    <div>
      <MenuNav/>
      <CarouselMostrar/>
      <Atras/>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default Home


