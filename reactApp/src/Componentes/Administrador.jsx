import React, { useEffect, useState } from 'react'
import { obtenerDatos } from '../JS/Fetch'
import { Card, Container } from 'react-bootstrap';
import ContenedorCard from './ContenedorCard';
import ContenedorCardAdmin from './ContenedorCardAdmin';
import ContenedorCardMantenimiento from './ContenedorCardMantenimiento';
import ContenedorCardTaller from './ContenedorCardTaller';
import EditarGeneralAdmin from './EditarGeneralAdmin';
import EditarTaller from './EditarTaller';
import EditarFormAdmin from './EditarFormAdmin';
import EditarCitas from './EditarCitas';


// obtener todos los servicios,talleres,citas --> resumen de toda la pagina al admin donde pueda eliminar , editar todos los servicios  
const Administrador = () => {

    const [selectServicio, setSeLectServicio] = useState([]); // almacenamiento
    const [selectCita, setSelectCita] = useState([]);
    const [selecsolicitudMantenimiento, setSelectSolicitudMantenimiento] = useState([]);
    const [selectTaller, setSelectTaller] = useState([]);
    
    const [mantenimiento,setMantenimiento] = useState(null)
    const [taller,setTaller] = useState(null)
    const [mostrarServicio, setMostrarServicio] = useState(null)
    const [cita, setCita] = useState(null)

    const edicionMantenimiento=(mantenimiento)=>{
        setMantenimiento(mantenimiento)
      }

    const edicionTaller=(taller)=>{
      setTaller(taller)
    }

    const edicionCita=(cita)=>{
        setCita(cita)
      }
  



 useEffect(() => {
    const obtenerAdmin = async () => {
        const datoServicio = await obtenerDatos('servicio/');
        setSeLectServicio(datoServicio)
        const datoCita = await obtenerDatos('Agendar_Cita/')
        setSelectCita(datoCita)
        const datosolicitudMantenimiento = await obtenerDatos('mantenimiento/')
        setSelectSolicitudMantenimiento(datosolicitudMantenimiento)
        const datoTaller = await obtenerDatos('taller/')
        setSelectTaller(datoTaller)
    }
    obtenerAdmin();
 },[selectTaller])

  return (
    <div>

    <div>
    <ContenedorCard getServicio={selectServicio} />
    {selectServicio && selectServicio.length > 0 ? (
     selectServicio.map((servicio) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {servicio.id}
                {servicio.tipo}
                {servicio.imagen} 
                {servicio.monto} 
                {servicio.descripcion} 
                {servicio.id_taller} 
                </Card.Title>
            </Card.Body>
        </Card>
    })
    ) : (
        <p>No hay servicios disponibles</p>
    )}
    </div>
    {mostrarServicio && (
        <EditarFormAdmin mostrarServicio={mostrarServicio}/>
    )}
    <hr/>

    <div>
    <h2 className='titulo-animado'>Agendar Citas</h2>
    <ContenedorCardAdmin getAdmin={selectCita} btnEditar={edicionCita}/>
    {selectCita && selectCita.length > 0 ? (
     selectCita.map((cita) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {cita.id}
                {cita.usuario}
                {cita.servicio} 
                {cita.fecha} 
                {cita.descripcion_cita} 
                {cita.estado}
                </Card.Title>
            </Card.Body>
        </Card>
    })
    ) : (
        <p>No hay Citas Agendadas</p>
    )}
    </div>
    {mantenimiento &&(
        <EditarGeneralAdmin mantenimiento={mantenimiento}/>
    )}
    <hr/>

    
    <div>
    <h2 className='titulo-animado'>Solicitud de Mantenimiento</h2>
    <ContenedorCardMantenimiento getMantenimiento={selecsolicitudMantenimiento} btnEditar={edicionMantenimiento}/>
    {selecsolicitudMantenimiento && selecsolicitudMantenimiento.length > 0 ? (
     selecsolicitudMantenimiento.map((mantenimiento) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {mantenimiento.nombre_taller}
                {mantenimiento.marca}
                {mantenimiento.modelo}
                {mantenimiento.anio}
                {mantenimiento.id_tipo}
                {mantenimiento.descripcion}
                </Card.Title>
            </Card.Body>
        </Card>
    })
    ) : (
        <p>No hay Citas Agendadas</p>
    )}
    </div>
    {cita &&(
        <EditarCitas cita={cita}/>
    )}
    <hr/>

    
    <div>
    <h2 className='titulo-animado'>Talleres</h2>
    <ContenedorCardTaller getTaller={selectTaller} btnEditar={edicionTaller}/>
    {selectTaller && selectTaller.length > 0 ? (
     selectTaller.map((tallerr) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {tallerr.id}
                {tallerr.nombre_taller}
                {tallerr.direccion}
                {tallerr.telefono}
                </Card.Title>
            </Card.Body>
        </Card>
    })
    ) : (
        <p>No hay taller disponibles</p>
    )}

    </div>
    {taller && (
        <EditarTaller taller={taller}/>
    )}
    
</div>
  )}

export default Administrador;
