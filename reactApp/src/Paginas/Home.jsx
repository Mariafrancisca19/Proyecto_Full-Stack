import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Maps from '../Componentes/Maps'
import Atras from '../Componentes/Atras'
import CarouselMostrar from '../Componentes/CarouselMostrar'
import Footer from '../Componentes/Footer'
import '../Estilos/App.css'

const Home = () => {
  return (
    <div className='container-home'>
      <MenuNav/>
      <CarouselMostrar/>
      <Atras/>
      <Footer/>
    </div>
  )
}

export default Home


