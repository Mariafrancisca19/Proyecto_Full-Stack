import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function FormCard({ imagen, servicio, precio, descripcion, btnEliminar, btnEditar, mostrarBotones, btnAgregarAlCarrito }) {

  const navigate = useNavigate();
  const [iniciar, setIniciar] = useState(false)

  return (

    <div className="card-container">
      <img className="card-image" width={'400px'} height={'300px'} src={imagen} ></img>
      <div className="card-content">
        <h2>Servicio: {servicio}</h2>
        <h2>Precio:₡{precio}</h2>
        <p style={{ color: 'black', fontFamily: 'serif', fontSize: '23px' }}>Descripcion: {descripcion}</p>
        <>
          <div className="card-buttons">
            <button className='btn btn-success ml-3' onClick={btnEliminar}>🗑️</button>
            <button className='btn btn-success btn-editar' onClick={btnEditar}>EDITAR</button>
          </div>
          <div className="card-buttons" >
            <button style={{ borderRadius: "15px" }} onClick={btnAgregarAlCarrito} > Agregar al carrito</button>
          </div>
        </>

      </div>
    </div>
  )
}

export default FormCard
