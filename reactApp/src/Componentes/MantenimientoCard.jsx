import React from 'react'
import '../Estilos/card.css'


const MantenimientoCard = ({nombre_taller,marca,modelo,anio,nombre_servicio}) => {
  return (
    <div>
    <div >
    <div className="mantenimiento-card" >
      <h2 className='titulo-span'>Taller: <span>{nombre_taller}</span></h2>
      <h2 className='titulo-span'>Marca: <span>{marca}</span></h2>
      <h2 className='titulo-span'>Modelo: <span>{modelo}</span></h2>
      <h2 className='titulo-span'>Año: <span>{anio}</span></h2>
      <h2 className='titulo-span'>Servicio: <span>{nombre_servicio}</span></h2>
    </div>
    </div>
    </div>
  )
}

export default MantenimientoCard
