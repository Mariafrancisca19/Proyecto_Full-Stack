import React from 'react'
import AdminCard from './AdminCard'


const ContenedorCardAdmin = ({getAdmin}) => {



  return (
    <div className='flex-row d-flex flex-wrap justify-content-center gap-4'>
      {Array.isArray(getAdmin) && getAdmin.length > 0 ? (
                getAdmin.map(muestraAdmin => (
                    <AdminCard
                        key={muestraAdmin.id}
                        usuario ={muestraAdmin.usuario}
                        servicio={muestraAdmin.servicio}
                        fecha={muestraAdmin.fecha}
                        descripcion={muestraAdmin.descripcion}

                    />
                ))
            ) : (
                <p className='no-servicios'>No hay servicios disponibles.</p>
                
            )}


    </div>
  )
}

export default ContenedorCardAdmin
