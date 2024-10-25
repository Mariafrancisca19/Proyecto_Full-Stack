import React from 'react'
import TallerCard from './TallerCard'


const ContenedorCardTaller = ({ getTaller }) => {

    return (
        <div className="contenedor-taller-card">
        {Array.isArray(getTaller) && getTaller.length > 0 ? (
            getTaller.map(muestraTaller => (
                <TallerCard
                    key={muestraTaller.id}
                    nombre_taller={muestraTaller.nombre_taller}
                    direccion={muestraTaller.direccion}
                    telefono={muestraTaller.telefono}
                />
            ))
        ) : (
            <p className='no-servicios'>No hay talleres disponibles.</p>
        )}
    </div>
    )
}

export default ContenedorCardTaller;
