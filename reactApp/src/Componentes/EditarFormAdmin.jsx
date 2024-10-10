import React, { useState } from 'react'
import { actualizarDatos } from '../JS/Fetch'


const EditarFormAdmin = () => {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState('')

  const actualizar = async () => {
   const datos = {
    tipo: nombre,
    monto: precio,
    descripcion: descripcion
   }

  }


  return (
    <div>
    <form>
    <label>Imagen</label>
    <input type='file' onChange={(e) => { setImagen(e.target.value) }}></input>

      <label>Tipo</label>
      <input placeholder='Nombre del servicio' type='name' onChange={(e) => { setNombre(e.target.value) }}></input>

      <label>Precio</label>
      <input placeholder='Precio' type='number' onChange={(e) => { setPrecio(e.target.value) }}></input>

      <label>Descripcion</label>
      <input type='text' placeholder='Descripcion' onChange={(e) => { setDescripcion(e.target.value) }}></input>

      <button type='submit'>ACTUALIZAR</button>

    </form>
      
    </div>
  )
}

export default EditarFormAdmin
