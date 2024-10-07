import React from 'react'
import { useState } from 'react'


const FormServicio = () => {
  const [nombreServicio, setNombreServicio] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [base64, setBase64] = useState('')

  // funcion para leer el archivo
  const cambioArchivo = (event) => {
    const archivo = event.target.files[0];
    convertirBase64(archivo)

  }
  

  // convertir en base64
  const convertirBase64 = (archivo)=>{
     const reader = new FileReader();
    reader.readAsDataURL(archivo)
    reader.onloadend = () => {
      setBase64(reader.result);
    }
  }




  return (
    <div>
    <h1>Servicios</h1>
    <form>
    <label>Nombre Servicio</label>
    <input placeholder='Nombre del servicio' onChange={(e) => {setNombreServicio(e.target.value)}}></input>

    <label typeof='number'>Precio</label>
    <input placeholder='Precio' onChange={(e) => {setPrecio(e.target.value)}}></input>

    <label>Descripcion</label>
    <input placeholder='Descripcion' onChange={(e) => {setDescripcion(e.target.value)}}></input>

    <input type='file' onChange={cambioArchivo}></input>
    <button type='button'> ENVIAR</button>
    </form>
    </div>
  )
}

export default FormServicio
