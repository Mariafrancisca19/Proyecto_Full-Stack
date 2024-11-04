import React from 'react'
import { actualizarDatos } from '../JS/Fetch'
import { useState } from 'react'
import '../Estilos/card.css'

function EditarTaller({taller}) {

    const [acttaller,setActTaller] = useState(taller.nombre_taller)
    const [direccion,setDireccion] = useState(taller.direccion)
    const [telefono,setTelefono] = useState(taller.telefono)

    const actualizarTaller = async () => {
      const datosTaller = {
        id:taller.id,
        nombre_taller:acttaller,
        direccion:direccion,
        telefono:telefono,
      }
      const respuesta = await actualizarDatos(datosTaller,'taller_update',datosTaller.id)
      console.log(respuesta)
    }

    return (

        <div className="edit-taller-card" style={{width:'250px',marginBottom:'20px',}} >
            <label className='label-taller'>Taller: </label>
            <input className='input-taller' onChange={(e) => { setActTaller(e.target.value) }}></input>

            <label className='label-taller'>Dirección: </label>
            <input className='input-taller' onChange={(e) => { setDireccion(e.target.value) }}></input>

            <label className='label-taller'>Teléfono: </label>
            <input className='input-taller' onChange={(e) => { setTelefono(e.target.value) }}></input>


            <button className='btn-taller' onClick={actualizarTaller}>Actualizar</button>




        </div>
    )
}

export default EditarTaller
