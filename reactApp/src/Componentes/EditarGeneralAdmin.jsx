import React, { useEffect, useState } from 'react'
import { actualizarDatos, obtenerDatos } from '../JS/Fetch'
import '../Estilos/card.css'


function EditarGeneralAdmin({ mantenimiento }) {

  const [taller, setTaller] = useState(mantenimiento.id_taller)
  const [marca, setMarca] = useState(mantenimiento.marca)
  const [modelo, setModelo] = useState(mantenimiento.modelo)
  const [anio, setAnio] = useState(mantenimiento.anio)
  const [servicio, setServicio] = useState(mantenimiento.nombre_servicio)

  const [selectMantenimiento, setSelectMantenimiento] = useState([])
  const [servicioMantenimiento, setServicioMantenimiento] = useState([])

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

  // traer los talleres, servicios
  useEffect(() => {
    const obtenerMantenimiento = async () => {
      const mostrarMantenimiento = await obtenerDatos('taller/')
      setSelectMantenimiento(mostrarMantenimiento)
      const mostrarServicio = await obtenerDatos('servicio/')
      setServicioMantenimiento(mostrarServicio)
    }
    obtenerMantenimiento()
  }, [])



  return (
    <div>
      <div className="edit-mantenimiento-card" >
        <label className='label-mantenimiento'>Taller: </label>
        <select className='select-mantenimiento' onChange={(e) => { setTaller(e.target.value) }}>
          <option className='option-mantenimiento' value='' disabled>Seleccionar Taller </option>
          {selectMantenimiento.map((mantenimiento) => {
            return (
              <option className='option-mantenimiento' key={mantenimiento.id}>{mantenimiento.nombre_taller}</option>
            )
          })
          }
        </select>


        <label className='label-mantenimiento'>Marca: </label>
        <input className='input-mantenimiento' onChange={(e) => { setMarca(e.target.value) }}></input>

        <label className='label-mantenimiento'>Modelo: </label>
        <input className='input-mantenimiento' onChange={(e) => { setModelo(e.target.value) }}></input>

        <label className='label-mantenimiento'>Año: </label>
        <input className='input-mantenimiento' type='date' onChange={(e) => { setAnio(e.target.value) }}></input>

        <label className='label-mantenimiento'>Servicio: </label>
        <select className='select-mantenimiento' onChange={(e) => { setServicio(e.target.value) }}>
        <option className='option-mantenimiento' value='' disabled>Seleccionar Servicio </option>
        {servicioMantenimiento.map((servicio) => {
          return (
            <option className='option-mantenimiento' key={servicio.id}>{servicio.tipo}</option>
          )
        })}
</select>
        <button className='button-mantenimiento' onClick={actualizarMantenimiento}>Actualizar</button>

      </div>

    </div>
  )
}

export default EditarGeneralAdmin;

