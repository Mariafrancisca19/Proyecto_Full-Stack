import React from 'react'
import { actualizarDatos } from '../JS/Fetch'
import { useState } from 'react'

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

        <div className="mantenimiento-card" >
            <label>Taller: </label>
            <input onChange={(e) => { setActTaller(e.target.value) }}></input>

            <label>Dirección: </label>
            <input onChange={(e) => { setDireccion(e.target.value) }}></input>

            <label>Teléfono: </label>
            <input onChange={(e) => { setTelefono(e.target.value) }}></input>


            <button onClick={actualizarTaller}>Actualizar</button>




        </div>
    )
}

export default EditarTaller
