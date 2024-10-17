import React, { useEffect, useState } from 'react';
import { mostrarAlerta } from '../JS/SweetAlert'
import '../Estilos/contacto.css'


const Formulario = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

// cambiar la marca,modelo y año por defecto en un select
// preguntar al profe de la validacion de la imagen dentro de la funcion espacios vacios



  // Validación de campos vacíos
  const espacioVacio = (e) => {
    e.preventDefault();
    if (!marca || !modelo || !año || !servicio || !descripcion) {
      mostrarAlerta('error', 'Campos obligatorios');
    } else {
      // Aquí podrías hacer el envío de datos, como una petición POST
      console.log({ marca, modelo, año, servicio, descripcion, imagen });
    }
  };

  // Reiniciar el formulario
  const reiniciarFormulario = () => {
    setMarca('');
    setModelo('');
    setAño('');
    setServicio('');
    setDescripcion('');
    setImagen('');
  };

  useEffect(() =>{
   

  })


  return (
    <div className='form-container'>
      <form className='form'>
        <h2 className='form-title'>Solicitud de Mantenimiento</h2>

        <div className='form-group'>
          <label htmlFor='marca' className='form-label'>Marca</label>
          <select id='marca' className='form-select' value={marca} onChange={(e) => setMarca(e.target.value)}>
            <option value="">Seleccione Marca</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            {/* Añadir más marcas según necesidad */}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='modelo' className='form-label'>Modelo</label>
          <select id='modelo' className='form-select' value={modelo} onChange={(e) => setModelo(e.target.value)}>
            <option value="">Seleccione Modelo</option>
            <option value="corolla">Corolla</option>
            <option value="rav4">RAV4</option>
            <option value="camry">Camry</option>
            {/* Añadir más modelos según la marca seleccionada */}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='año' className='form-label'>Año</label>
          <select id='año' className='form-select' value={año} onChange={(e) => setAño(e.target.value)}>
            <option value="">Seleccione Año</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            {/* Añadir más años según necesidad */}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='servicio' className='form-label'>Servicio</label>
          <select id='servicio' className='form-select' value={servicio} onChange={(e) => setServicio(e.target.value)}>
              <option value="">Seleccione un servicio</option>
              <option value="mantenimiento_general">Mantenimiento General</option>
              <option value="cambio_aceite">Cambio de Aceite</option>
              <option value="frenos">Revisión de Frenos</option>
              {/* Añadir más servicios según necesidad */}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='descripcion' className='form-label'>Descripción</label>
          <input
            type='text'
            id='descripcion'
            className='form-input'
            placeholder='Descripción del servicio'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='imagen' className='form-label'>Imagen</label>
          <input
            type='file'
            id='imagen'
            className='form-input'
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className='form-actions'>
          <button type='submit' className='form-button' onClick={espacioVacio}>Enviar</button>
          <button type='button' className='form-button reset' onClick={reiniciarFormulario}>Reiniciar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
