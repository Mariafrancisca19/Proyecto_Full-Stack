import React from 'react'
import MantenimientoCard from './MantenimientoCard'
import { deleteDatos } from '../JS/Fetch'


function ContenedorCardMantenimiento ({getMantenimiento,btnEditar,btnEliminar}) {

  const eliminarMantenimiento = async (id) =>{
    deleteDatos("mantenimiento_delete", id + "/")
   }

  return (
    <div className='contenedor-mantenimiento '>
     {Array.isArray(getMantenimiento) && getMantenimiento.length > 0 ? (
        getMantenimiento.map(muestraMantenimiento => (
        <MantenimientoCard
            key={muestraMantenimiento.id}
            nombre_taller={muestraMantenimiento.nombre_taller}
            marca={muestraMantenimiento.marca}
            modelo={muestraMantenimiento.modelo}
            anio={muestraMantenimiento.anio}
            nombre_servicio={muestraMantenimiento.nombre_servicio}
            btnEditar={()=>btnEditar(muestraMantenimiento)}
            btnEliminar={()=>eliminarMantenimiento(muestraMantenimiento.id)} 
        />
        ))
     ): (
        <p>No hay mantenimiento disponible</p>
     )}
      
    </div>
  )
}

export default ContenedorCardMantenimiento;
