import React, { useState, useEffect } from 'react'
import MenuNav from '../Componentes/MenuNav'
import CarouselMostrar from '../Componentes/CarouselMostrar'
import Footer from '../Componentes/Footer'
import '../Estilos/App.css'
import { obtenerDatos } from '../JS/Fetch'
import ContenedorCard from '../Componentes/ContenedorCard'
import EditarFormAdmin from '../Componentes/EditarFormAdmin'
import FormCard from '../Componentes/FormCard'


const Home = () => {


  const [data, setData] = useState([])
  const [id, setID] = useState()
  const [estado, setEstado] = useState(false)

  // obtencion de los servicios del formulario
  // METODO DEL GET

  // FUNCION PARA RECARGAR LA PAGINA
  const recargaPag = () => {
    setEstado(!estado)
  }
  useEffect(() => {
    const servicio = async () => {
      const data = await obtenerDatos("servicio/")
      console.log(data)
      setData(data)
    }
    servicio()
  }, [])


  return (
    <div className='container-home'>
      <MenuNav data={data} />
      <CarouselMostrar />
      <h1>SERVICIOS</h1>
      <div className='container'>
        <div className='d-flex flex-wrap w-25 mx-auto justify-content-center mt-3'>
          <ContenedorCard getServicio={data} />
        </div>
      </div>

      {id &&
        <EditarFormAdmin id={id} recargaPag={recargaPag} />
      }

      <Footer id={"#footer"} />
    </div>
  )
}

export default Home


