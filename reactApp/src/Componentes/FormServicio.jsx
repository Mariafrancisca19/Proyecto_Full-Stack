import React from 'react'

const FormServicio = () => {
  const [nombreServicio, setNombreServicio] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [base64, setBase64] = useState('')


  return (
    <div>
    <h1>Servicios</h1>

    <label>Nombre Servicio</label>
    <input placeholder='Nombre del servicio'></input>

    <label typeof='number'>Precio</label>
    <input placeholder='Precio'></input>

    <label>Descripcion</label>
    <input placeholder='Descripcion'></input>

    <input type='file'></input>
    <button type='button'> ENVIAR</button>

    </div>
  )
}

export default FormServicio
