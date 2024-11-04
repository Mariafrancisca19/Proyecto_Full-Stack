import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { traerCookie } from '../cookiesJS/cookies';


function FormCard({ imagen, servicio, precio, descripcion, btnEliminar, btnEditar, mostrarBotones,btnAgendarCita}) {

  const navigate = useNavigate();

  

  return (
 
    <div>
        <div className="card-container border border-warning">
          <img className="card-image" width={'400px'} height={'300px'} src={imagen} ></img>
          <div className="card-content">
            <h2>Servicio: {servicio}</h2>
            <h2>Precio:₡{precio}</h2>
            <p style={{ color:'black',  fontSize: '20px' }}>Descripcion: {descripcion}</p>
            <>
            {traerCookie("superuser") === 'true' && (
              <div className="card-buttons">
                <button  className='btn btn-primary ml-3' style={{backgroundColor:'#4a4a4a', border:'none'}} onClick={btnEliminar}>🗑️</button>
                <button style={{backgroundColor:"#4a4a4a",color:'#fff', border:'none'}} className='btn btn-success btn-editar' onClick={btnEditar}>EDITAR</button>
              </div>
            )}
              <div className="card-buttons" >
                <button style={{ borderRadius: "6px", border:'none' , backgroundColor:"#2e2e2e", color:'white'}} onClick={()=> navigate("/servicio")} > Solicitud Mantenimiento</button>
              </div>
              <div className="card-buttons" >
                <button style={{ borderRadius: "6px", border:'none', backgroundColor:"#8e8e8e",color:"#fff"}}  onClick={btnAgendarCita}> AGENDAR CITA</button>
              </div>
              
            </>

          </div>
        </div>
    </div>
  )
}

export default FormCard
