import React, { useState } from 'react'


function AdminCard({ usuario, servicio, fecha, descripcion,btnEliminar,btnEditar}) {

  return (
    <div className="admin-card">
    <h2 className="titulo-admin">Usuario: <span>{usuario}</span></h2>
    <h2 className="titulo-admin">Servicio: <span>{servicio}</span></h2>
    <h2 className="titulo-admin">Fecha: <span>{fecha}</span></h2>
    <p className='titulo-admin'>Descripcion: {descripcion}</p>
    <button onClick={btnEliminar}>Eliminar</button>
    <button onClick={btnEditar}>Editar</button>
    </div>
  )
}

export default AdminCard;
