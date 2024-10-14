import React, { useState } from 'react'
import { actualizarDatos } from '../JS/Fetch'
import '../Estilos/modals.css'


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
    <div className='divgeneral'>
    <form className='formeditar'>
    <div className='header'>
    <h2 className='titulo '>Editar Servicio</h2>
    </div>
    <label className='labelgeneral'>Imagen</label>
    <input type='file' onChange={(e) => { setImagen(e.target.value) }}></input>

      <label className='labelgeneral'>Tipo</label>
      <input className='inputgeneral' placeholder='Nombre del servicio' type='name' onChange={(e) => { setNombre(e.target.value) }}></input>

      <label className='labelgeneral'>Precio</label>
      <input className='inputgeneral' placeholder='Precio' type='number' onChange={(e) => { setPrecio(e.target.value) }}></input>

      <label className='labelgeneral'>Descripcion</label>
      <input className='inputgeneral' type='text' placeholder='Descripcion' onChange={(e) => { setDescripcion(e.target.value) }}></input>

      <button type='button' className='btngeneral' onClick={actualizar}>ACTUALIZAR</button>

    </form>
      
    </div>
  )
}

export default EditarFormAdmin
