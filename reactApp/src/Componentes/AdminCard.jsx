import React from 'react'


function AdminCard({usuario,servicio,fecha,descripcion}) {
  return (
    <div>
      
    <h2>Usuario:{usuario}</h2>
    <h2>Servicio:{servicio}</h2>
    <h2>Fecha:{fecha}</h2>
    <p>Descripcion:{descripcion}</p>
      
    
    </div>
  )
}

export default AdminCard
