import React from 'react'
import MenuNav from '../Componentes/MenuNav'
import Atras from '../Componentes/Atras'
import CarouselMostrar from '../Componentes/CarouselMostrar'
import Footer from '../Componentes/Footer'
import '../Estilos/App.css'
import Card from '../Componentes/Card'

const Home = () => {
  return (
    <div className='container-home'>
      <MenuNav/>
      <CarouselMostrar/>
      <Card/>
      <Atras/>
      <Footer id={"#footer"}/>
    </div>
  )
}

export default Home


