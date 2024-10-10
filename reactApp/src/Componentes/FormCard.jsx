import React, { useState } from 'react'


function FormCard({imagen,servicio,precio,descripcion,btnEliminar,btnEditar,mostrarBotones}) {
 
  const [iniciar,setIniciar] = useState(false)
  const modificarTexto = () => {
    setIniciar(true)
  }

  return (
    
    <div className="card-container">
      <img className="card-image" width={'400px'} height={'300px'} src={imagen} ></img>
      <div className="card-content">
      <h2>Servicio: {servicio}</h2>
      <h2>Precio:₡{precio}</h2>
      <p style={{color:'black'}}>Descripcion: {descripcion}</p>
      {mostrarBotones &&
      <>
      <div className="card-buttons">
        <button className='btn btn-success ml-3' onClick={btnEliminar}>🗑️</button>
        <button className='btn btn-success btn-editar' onClick={btnEditar}>EDITAR</button>
        </div>
      </>
      }
      </div>
    </div>
  )
}

export default FormCard
