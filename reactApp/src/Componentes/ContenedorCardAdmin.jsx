import React from 'react'
import AdminCard from './AdminCard'


const ContenedorCardAdmin = ({getAdmin}) => {

  return (
    <div className="contenedor-admin-cards">
      {Array.isArray(getAdmin) && getAdmin.length > 0 ? (
                getAdmin.map(muestraAdmin => (
                    <AdminCard
                        key={muestraAdmin.id}
                        usuario ={muestraAdmin.usuario_nombre} // nombre de mi serializers para mostrar el nombre usuario
                        servicio={muestraAdmin.servicio_nombre} // nombre de mi serializers para mostrar el nombre servicio
                        fecha={muestraAdmin.fecha}
                        descripcion={muestraAdmin.descripcion_cita}
                        // btnEliminar={()=>} recordar hacerle la funcion a cada btn en los contenedores
                    />
                ))
            ) : (
                <p>No hay servicios disponibles.</p>
                
            )}


    </div>
  )
}

export default ContenedorCardAdmin;
