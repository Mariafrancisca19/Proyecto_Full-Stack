import React, { useState } from 'react'


function FormCard({imagen,servicio,precio,descripcion,btnEliminar,btnEditar,mostrarBotones}) {
 
  const [iniciar,setIniciar] = useState(false)
  const modificarTexto = () => {
    setIniciar(true)
  }

  return (
    <div>
      <img width={'400px'} height={'300px'} src={imagen} ></img>
      <h2>Servicio: {servicio}</h2>
      <h2>Precio: {precio}</h2>
      <p>Descripcion: {descripcion}</p>
      {mostrarBotones &&
      <>
        <button className='btn btn-success ml-3' onClick={btnEliminar}>🗑️</button>
        <button className='btn btn-success btn-editar' onClick={btnEditar}>EDITAR</button>
      </>
      }
    </div>
  )
}

export default FormCard
