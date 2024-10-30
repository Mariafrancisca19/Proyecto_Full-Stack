import React, { useEffect, useState } from 'react'
import { actualizarDatos } from '../JS/Fetch'
import { obtenerDatos } from '../JS/Fetch';
function EditarCitas({ citas }) {

  const [usuario, setUsuario] = useState('')
  const [servicio, setServicio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')

  const actualizarCitas = async () => {
    const datosCitas = {
      id: localStorage.getItem('idCita'), // se hice de otra forma porque no le estan llegando nada al editar
      usuario: usuario,
      servicio: servicio,
      descripcion_cita: descripcion,
      fecha: fecha
    }
    const respuesta = await actualizarDatos(datosCitas, 'cita_update', datosCitas.id)
    console.log(respuesta);

  }
  const [selectCitaAgendada, setCitaAgendada] = useState([])
  const [selectServicio, setSeLectServicio] = useState([]);
  // traer los usuarios , servicios
  useEffect(() => {
    const obtenerCitasAgendadas = async () => {
      const CitasAgendadas = await obtenerDatos('registro/')
      setCitaAgendada(CitasAgendadas);
      const Servicio = await obtenerDatos('servicio/')
      setSeLectServicio(Servicio)
    }
    obtenerCitasAgendadas();
  }, [])


  return (

    <div className="admin-card">
      <h2 className="">Usuario: <span></span></h2>
      <select onChange={(e) => setUsuario(e.target.value)} placeholder=' Nombre de usuario' value={usuario} >
        <option value='' disabled>Seleccionar Usuario </option>
        {selectCitaAgendada.map((cita) => {
          return (
            <option key={cita.id}>{cita.usuario}</option>
          )
        })
        }
      </select>


      <h2 className="">Servicio: <span></span></h2>
      <select placeholder='Nombre del servicio' onChange={(e) => { setServicio(e.target.value) }}>
        <option value='' disabled>Seleccionar Servicio </option>
        {selectServicio.map((servicio) => {
          return (
            <option key={servicio.id}>{servicio.tipo}</option>
          )
        })}

      </select>

      <h2 className="">Fecha: <span></span></h2>
      <input type='date' onChange={(e) => { setFecha(e.target.value) }}></input>

      <p className=''>Descripcion: </p>
      <input onChange={(e) => { setDescripcion(e.target.value) }}></input>

      <button onClick={actualizarCitas}>Actualizar</button>

    </div>

  )
}

export default EditarCitas
