import React from 'react'
import FormCard from './FormCard'
import { Card } from 'react-bootstrap'


function ContenedorCard(obtenerDatos,btnEliminar,btnEditar,mostrarBotones) {

  return (
    <div className='d-flex gap-3 mt-3'>
      {obtenerDatos.map(pul=> (
       <Card
        key={serv.id}
        servicio= {serv.servicio}
        imagen={serv.imagen}
        precio={serv.precio}
        descripcion={descripcion}
        btnEliminar={()=>btnEliminar(serv.id)}
        btnEditar={()=>btnEditar(serv.id)}
        mostrarBotones={mostrarBotones}
       />


      ) )}


    </div>
  )
}

export default ContenedorCard
