import React, { useState } from 'react'
import { actualizarDatos } from '../JS/Fetch'


const EditarFormAdmin = ({producto,productoSelect}) => {

  const [nombre, setNombre] = useState(producto.tipo)
  const [precio, setPrecio] = useState(producto.monto)
  const [descripcion, setDescripcion] = useState(producto.descripcion)
  const [imagen, setImagen] = useState()

  const actualizar = async () => {
   const datosActualizados = {
    id:producto.id,
    tipo: nombre,
    monto: precio,
    descripcion: descripcion,
    imagen:imagen
   }
   const respuesta = await  actualizarDatos(datosActualizados,'servicio',datosActualizados.id) // poner el put
   console.log(respuesta);
   setDescripcion(null)
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

      <button type='button' onClick={actualizar}>ACTUALIZAR</button>

    </form>
      
    </div>
  )
}

export default EditarFormAdmin
