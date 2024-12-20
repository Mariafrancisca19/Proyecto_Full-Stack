import React, { useState, useEffect } from 'react';
import '../Estilos/agendarCita.css';
import { crearCookie, traerCookie } from '../cookiesJS/cookies';
import { mostrarAlerta } from '../JS/SweetAlert';
import { post } from '../JS/Fetch';


// Función para calcular cuantos dias tiene un mes dado
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate(); // Devuelve el último día del mes
};

const Citas = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Fecha actual del mes y año en el calendario
  const [daysInMonth, setDaysInMonth] = useState([]);  
  const [eventDate, setEventDate] = useState('');
  const [eventName, setEventName] = useState('');
 
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState(''); // administrador

  const [infoEvent, setInfoEvent] = useState(() => { // guardar lista almacenada en el localstorage 
    const savedEvents = localStorage.getItem('eventos');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  // Actualiza los días del mes actual cada vez que cambia la fecha
  useEffect(() => {
    const totalDays = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1); // Crear array del 1 al total Dias
    setDaysInMonth(daysArray);
  }, [currentDate]);

  // Guardar eventos en localStorage
  const guardarDatosEventos = () => {
    const eventos = {
      servicio: traerCookie('servicioID'),
      usuario: traerCookie('usuarioID'),
      descripcion_cita:eventName,
      fecha: eventDate,
    };
    const updatedEvents = [...infoEvent, eventos];
    setInfoEvent(updatedEvents);
    localStorage.setItem('eventos', JSON.stringify(updatedEvents));
  };

  // Agregar eventos
  const handleAddEvent = () => {   // validar el ingreso de fecha y nombre , lo guarda los eventos localstorage 
    if (!eventDate ||  !eventName) {
      mostrarAlerta('error', 'Por favor, ingrese todos los campos')
      return;

    }  
    
    const date = new Date(eventDate);
    const day = date.getDate();
    
    if (day && eventName) {
      guardarDatosEventos();
      setEventDate('');   //
      setEventName('');  // limmpiar el campo de nombre del evento
      mostrarAlerta('success', 'Cita agregada correctamente')
      
    } else {
      
      mostrarAlerta('error','Por favor, ingrese una fecha y un nombre de evento válidos.');
    }
    
  };

  // Cambiar el mes en el calendario cuando se selecciona una fecha
  useEffect(() => {
    if (eventDate) {
      const selectedDate = new Date(eventDate);
      setCurrentDate(selectedDate); // Cambiar el mes y año según la fecha seleccionada
    }
  }, [eventDate]);

  // Función para eliminar eventos
  const administrador = traerCookie('superuser')
  const handleDeleteEvent = (day, eventToDelete) => {
    console.log(administrador);
    if(administrador === 'true'){
      const updatedEvents = infoEvent.filter(
        (ev) => !(new Date(ev.fecha).getDate() === day && ev.descripcion_cita === eventToDelete)
      );
      setInfoEvent(updatedEvents);
      localStorage.setItem('eventos', JSON.stringify(updatedEvents));
      mostrarAlerta('info','Eliminado con exito.');
    } else {
      mostrarAlerta('error','No tienes permiso para eliminar eventos.');
    }
  };

  // post para guardar o enviar  los datos de mi citas al servidor 
 const postCita = async () => {
   const agendarCita = {
    servicio: traerCookie('servicioID'),
    usuario: traerCookie('usuarioID'),
    descripcion_cita:eventName,
    fecha: eventDate,
    };
    try {
      const response = await post(agendarCita, "Agendar_Cita")
      if (response){
      mostrarAlerta("success","Cita agregada correctamente")
    }else{
      mostrarAlerta("error","Hubo un error al intentar agregar la cita.")
    }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div style={{ fontFamily: 'initial', marginTop: '30px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>
      <h1>Calendario De Mantenimiento</h1>
      <h2>
        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
      </h2>
      <div id="calendario" className="calendario">
        {daysInMonth.map((day) => {
          const eventosDelDia = infoEvent.filter(
            (ev) => new Date(ev.fecha).getDate() === day && new Date(ev.fecha).getMonth() === currentDate.getMonth()
          );
          const isSelected =
            new Date(eventDate).getDate() === day &&
            new Date(eventDate).getMonth() === currentDate.getMonth();

          return (
            <div key={day} className={`day ${isSelected ? 'selected' : ''}`}>
              {day}
              {eventosDelDia.map((evento, index) => (
                <div
                  key={index}
                  className="event"
                  onClick={() => handleDeleteEvent(day, evento.descripcion_cita)} // Se elimina el evento específico
                >
                  {evento.descripcion_cita}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div id="event-form">
        <h2>Agregar Citas De Mantenimiento</h2>
        <label htmlFor="event-date">Fecha:</label>
        <input
          placeholder="Ingresa la fecha del evento"
          type="date"
          id="event-date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <br />
        <label htmlFor="event-name">Tipo de mantenimiento:</label>
        <input
          placeholder="Ingresa el nombre del evento"
          type="text"
          id="event-name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br />
        <button id="add-event" onClick={postCita}>
          Agregar Cita
        </button>
      </div>
    </div>
  );
};

export default Citas;

