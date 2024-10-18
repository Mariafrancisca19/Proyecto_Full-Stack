import React, { useEffect, useState } from 'react';
import { mostrarAlerta } from '../JS/SweetAlert'
import '../Estilos/contacto.css'
import { obtenerDatos, post } from '../JS/Fetch';


const Formulario = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [taller, setTaller] = useState('');

  const [selectServicio, setSeLectServicio] = useState([]);
  const [selectTaller, setSelectTaller] = useState([]);


  // Validación de campos vacíos
  const espacioVacio = (e) => {
    e.preventDefault();
    if (!marca || !modelo || !año || !servicio || !descripcion || !taller) {
      mostrarAlerta('error', 'Campos obligatorios');
    } else {
      // Aquí podrías hacer el envío de datos, como una petición POST
      subirMantenimiento()
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
    setTaller('');
  };

  // get donde me muestra mis servicios guardados 
  useEffect(() => {
    const obtenerServicio = async () => {
      const dataTaller = await obtenerDatos("taller/")
      const dataServicio = await obtenerDatos("servicio/")
      setSeLectServicio(dataServicio);
      setSelectTaller(dataTaller);
      console.log(selectTaller);
    }
    obtenerServicio();
  }, [])

  const subirMantenimiento = async () => {
    // post para guardar mi solicitud de mantenimiento
    // base de datos | const de mi formulario
    const mantenimiento = {
      marca: marca,
      modelo: modelo,
      anio: año,
      descripcion: descripcion,
    };
    // llamar a mi post, pasarle el objeto y el endpoint
    try {
      const response = await post(mantenimiento, 'mantenimiento/')
      console.log(response);
      console.log(mantenimiento)
      mostrarAlerta("success", "Mantenimiento agregado correctamente")
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='form-container'>
      <form className='form'>
        <h2 className='form-title'>Solicitud de Mantenimiento</h2>

        <div className='form-group'>
          <label htmlFor='imagen' className='form-label'>Taller</label>
          <select placeholder='Nombre del Taller' className='form-select' value={taller} onChange={(e) => setTaller(e.target.value)}>
            <option value="" disabled>Seleccione un taller</option>
            {selectTaller.map((taller) => {
              return (
                <option key={taller.id}>{taller.nombre_taller}</option>
              )
            })
            }
          </select>

        </div>

        <div className='form-group'>
          <label htmlFor='marca' className='form-label'>Marca</label>
          <input placeholder='Marca' className='form-input' value={marca} onChange={(e) => setMarca(e.target.value)}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='modelo' className='form-label'>Modelo</label>
          <input placeholder='Modelo' className='form-input' value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='año' className='form-label'>Año</label>
          <input placeholder='Año' className='form-input' value={año} onChange={(e) => setAño(e.target.value)}></input>

        </div>

        <div className='form-group'>
          <label htmlFor='servicio' className='form-label'>Servicio</label>
          <select id='servicio' className='form-select' value={servicio} onChange={(e) => setServicio(e.target.value)}>
            <option value="" disabled>Seleccione un servicio</option>
            {selectServicio.map((servicio) => {
              return (
                <option key={servicio.id}>{servicio.tipo}</option>
              )
            })}
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
