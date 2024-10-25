import React, { useState, useEffect } from 'react'
import MenuNav from '../Componentes/MenuNav'
import CarouselMostrar from '../Componentes/CarouselMostrar'
import Footer from '../Componentes/Footer'
import '../Estilos/App.css'
import { obtenerDatos } from '../JS/Fetch'
import ContenedorCard from '../Componentes/ContenedorCard'
import EditarFormAdmin from '../Componentes/EditarFormAdmin'
import Administrador from '../Componentes/Administrador'


const Home = () => {


  const [data, setData] = useState([])
  const [id, setID] = useState()
  const [estado, setEstado] = useState(false)
  const [servicio,setServicio] = useState(null)
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
  }, [data])

  const edicionServicio=(servicio)=>{
    setServicio(servicio)
  }


  return (
    <div className='container-home'>
      <MenuNav data={data} />
      <CarouselMostrar /> 
      <hr className='animado'/>

      <div>
          <ContenedorCard getServicio={data} mostrarBotones={true} btnEditar={edicionServicio} />
      </div>
      {/* {id &&
        <EditarFormAdmin id={id} recargaPag={recargaPag} />
      } */}
      {
        servicio && (<EditarFormAdmin
          producto={servicio} productoSelect={setServicio}
        />)
      }

     
       

      <Footer id={"#footer"} />
    </div>
  )
}

export default Home


