import React from 'react'
import MantenimientoCard from './MantenimientoCard'


const ContenedorCardMantenimiento = ({getMantenimiento}) => {
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
        />
        ))
     ): (
        <p>No hay mantenimiento disponible</p>
     )}
      
    </div>
  )
}

export default ContenedorCardMantenimiento;
