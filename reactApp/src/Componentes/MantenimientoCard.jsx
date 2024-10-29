import React, { useState } from 'react'
import '../Estilos/card.css'
import { obtenerDatos } from '../JS/Fetch'


function MantenimientoCard ({nombre_taller,marca,modelo,anio,nombre_servicio,btnEditar,btnEliminar}) {


  return (
  
    <div className="mantenimiento-card" >
      <h2 className='titulo-span'>Taller: <span>{nombre_taller}</span></h2>
      <h2 className='titulo-span'>Marca: <span>{marca}</span></h2>
      <h2 className='titulo-span'>Modelo: <span>{modelo}</span></h2>
      <h2 className='titulo-span'>Año: <span>{anio}</span></h2>
      <h2 className='titulo-span'>Servicio: <span>{nombre_servicio}</span></h2>
      <button onClick={btnEditar}>Editar</button>
      <button onClick={btnEliminar}>Eliminar</button>
    </div>
  )
}

export default MantenimientoCard
