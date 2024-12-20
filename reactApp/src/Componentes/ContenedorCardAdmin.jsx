import React from 'react'
import AdminCard from './AdminCard'
import { deleteDatos } from '../JS/Fetch'

function ContenedorCardAdmin ({getAdmin,btnEliminar,btnEditar}) {

 const eliminarCita = async (id) =>{
  deleteDatos("cita_delete", id + "/")
 }
 
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
                        btnEditar={()=>
                        {btnEditar(muestraAdmin)
                        localStorage.setItem('idCita',muestraAdmin.id)
                        }}
                        btnEliminar={()=>eliminarCita(muestraAdmin.id)} //recordar hacerle la funcion a cada btn en los contenedores
                    />
                ))
            ) : (
                <p>No hay citas agendadas.</p>
                
            )}


    </div>
  )
}

export default ContenedorCardAdmin;
