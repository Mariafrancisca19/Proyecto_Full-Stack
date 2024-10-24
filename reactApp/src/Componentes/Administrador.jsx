import React, { useEffect, useState } from 'react'
import { obtenerDatos } from '../JS/Fetch'
import { Card, Container } from 'react-bootstrap';
import ContenedorCard from './ContenedorCard';
import ContenedorCardAdmin from './ContenedorCardAdmin';
// obtener todos los servicios,talleres,citas --> resumen de toda la pagina al admin donde pueda eliminar , editar todos los servicios  
const Administrador = () => {

    const [selectServicio, setSeLectServicio] = useState([]); // almacenamiento
    const [selectCita, setSelectCita] = useState([]);
    const [selecsolicitudMantenimiento, setSelectSolicitudMantenimiento] = useState([]);
    const [selectTaller, setSelectTaller] = useState([]);

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
 },[])




  return (
    <div>

    <div>
    <ContenedorCard getServicio={selectServicio}/>
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

    <hr/>

    <div>
    <h2>Agendar Citas</h2>
    <ContenedorCardAdmin getAdmin={selectCita}/>
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

    <hr/>

    
    <div>
    <h2>Solicitud de Mantenimiento</h2>
    {selecsolicitudMantenimiento && selecsolicitudMantenimiento.length > 0 ? (
     selecsolicitudMantenimiento.map((mantenimiento) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {mantenimiento.id_taller}
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
 
    <hr/>

    
    <div>
    <h2>Talleres</h2>
    {selectTaller && selectTaller.length > 0 ? (
     selectTaller.map((taller) => {
        <Card>
            <Card.Body>
                <Card.Title>
                {taller.id}
                {taller.nombre_taller}
                {taller.direccion}
                {taller.telefono}
                </Card.Title>
            </Card.Body>
        </Card>
    })
    ) : (
        <p>No hay taller disponibles</p>
    )}

    </div>
    
</div>
  )}

export default Administrador;
