import React, { useState } from 'react'
import { actualizarDatos } from '../JS/Fetch'

function EditarGeneralAdmin({ mantenimiento }) {

  const [taller, setTaller] = useState(mantenimiento.id_taller)
  const [marca, setMarca] = useState(mantenimiento.marca)
  const [modelo, setModelo] = useState(mantenimiento.modelo)
  const [anio, setAnio] = useState(mantenimiento.anio)
  const [servicio, setServicio] = useState(mantenimiento.nombre_servicio)

  const actualizarMantenimiento = async () => {
    const actMantenimiento = {
      id: mantenimiento.id,
      nombre_taller: taller,
      marca: marca,
      modelo: modelo,
      anio: anio,
      nombre_servicio: servicio
    }
    const respuesta = await actualizarDatos(actMantenimiento, 'mantenimiento_Update', actMantenimiento.id) // poner el put
    console.log(respuesta);
    // setDescripcion(null)
  }



  return (
    <div>
      <div className="mantenimiento-card" >
        <label>Taller: </label>
        <input onChange={(e) => { setTaller(e.target.value) }}></input>

        <label>Marca: </label>
        <input onChange={(e) => { setMarca(e.target.value) }}></input>

        <label>Modelo: </label>
        <input onChange={(e) => { setModelo(e.target.value) }}></input>

        <label>Año: </label>
        <input type='date' onChange={(e) => { setAnio(e.target.value) }}></input>

        <label>Servicio: </label>
        <input onChange={(e) => { setServicio(e.target.value) }}></input>

        <button onClick={actualizarMantenimiento}>Actualizar</button>

      </div>

    </div>
  )
}

export default EditarGeneralAdmin;

