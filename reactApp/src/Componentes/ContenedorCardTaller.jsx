import React from 'react'
import TallerCard from './TallerCard'
import { deleteDatos } from '../JS/Fetch'


function ContenedorCardTaller ({ getTaller }) {

 const eliminarTaller = async (id) =>{
  deleteDatos("taller_delete", id + "/")
  }
    
    return (
        <div className="contenedor-taller-card">
        {Array.isArray(getTaller) && getTaller.length > 0 ? (
            getTaller.map(muestraTaller => (
                <TallerCard
                    key={muestraTaller.id}
                    nombre_taller={muestraTaller.nombre_taller}
                    direccion={muestraTaller.direccion}
                    telefono={muestraTaller.telefono}
                    btnEditar={()=>btnEditar(muestraTaller)}
                    btnEliminar={()=>eliminarTaller(muestraTaller.id)}
                />
            ))
        ) : (
            <p className='no-servicios'>No hay talleres disponibles.</p>
        )}
    </div>
    )
}

export default ContenedorCardTaller;
