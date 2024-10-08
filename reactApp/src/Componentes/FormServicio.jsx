import React from 'react'
import { useState } from 'react'
import { guardarDatos } from '../JS/Fetch'
import { mostrarAlerta } from '../JS/SweetAlert'
import '../Estilos/formServi.css'

const FormServicio = () => {
  const [nombreServicio, setNombreServicio] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [base64, setBase64] = useState('')
  const [taller, setTaller] = useState('')

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
      setBase64(reader.result);   // Aquí guardas el archivo en formato Base64
    }
  }

  const subirServicio = async(e)=>{
    e.preventDefault(); /*evita que la pagina se recargue*/

    if (!nombreServicio || !precio || !descripcion || !base64) {
      mostrarAlerta("error", "Todos los campos son obligatorios");
     return; // validacion de campos obligatorios
    } 
     
    const servicio = {
      tipo : nombreServicio,
      imagen : base64,                                // lo que esta en la bd:estado
      monto : precio,  
      descripcion:descripcion,                // estructura del servicio
      taller : taller,
    };
    // llama al post, le pasa el obj(servicio) y el endpoint

    try {
      const respuesta = await guardarDatos(servicio,"api/servicio")
      if (respuesta.success) {
        mostrarAlerta("success","Servicio agregaddo correctamente")
      }
    } catch (error) {
      console.error('error al enviar los servicios',error);
    }


  }



  return (
    <div className='container-formServi'>
    <h1 style={{fontFamily:'fantasy', fontSize:'40px'}}>Servicios</h1>
    <form className='formServi'>
    <label className='label-formServi'>Imagen </label>
    <input type='file' onChange={cambioArchivo} className='input-formServi'></input>
    <label className='label-formServi'>Nombre del taller</label>
    <input className='input-formServi' placeholder='Nombre del taller' onChange={(e) => {setTaller(e.target.value)}}></input>
    <label className='label-formServi'>Tipo</label>
    <input className='input-formServi' placeholder='Nombre del servicio' onChange={(e) => {setNombreServicio(e.target.value)}}></input>

    <label typeof='number' className='label-formServi'>Precio</label>
    <input className='input-formServi' placeholder='Precio' type='number' onChange={(e) => {setPrecio(e.target.value)}}></input>

    <label className='label-formServi'>Descripcion</label>
    <input className='input-formServi' placeholder='Descripcion' onChange={(e) => {setDescripcion(e.target.value)}}></input>

    <button className='boton-enviar' type='submit' onClick={subirServicio}> ENVIAR</button>
    </form>
    </div>
  )
}

export default FormServicio
