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
      id_taller:taller,
      id_tipo:servicio,
      marca: marca,
      modelo: modelo,
      anio: año,
      descripcion: descripcion,
    };
    // llamar a mi post, pasarle el objeto y el endpoint
    try {
      const response = await post(mantenimiento, 'mantenimiento')
      console.log(response);
      console.log(mantenimiento)
      mostrarAlerta("success", "Mantenimiento agregado correctamente")
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='div-container-solicitud'>
      <form className='form-solicitud'>
        <h2 className='form-title-solicitud'>Solicitud de Mantenimiento</h2>
        <div>

        <div className='form-group-solicitud'>
          <label htmlFor='imagen' className='form-label-solicitud'>Taller</label>
          <select placeholder='Nombre del Taller' className='form-select-solicitud' value={taller} onChange={(e) => setTaller(e.target.value)}>
            <option value="" disabled>Seleccione un taller</option>
            {selectTaller.map((taller) => {
              return (
                <option key={taller.id} value={taller.id}>{taller.nombre_taller}</option>
              )
            })
            }
          </select>

        </div>

          <div className='form-group-solicitud'>
            <label htmlFor='marca' className='form-label-solicitud'>Marca</label>
            <input placeholder='Marca' className='form-input-solicitud' value={marca} onChange={(e) => setMarca(e.target.value)}></input>
          </div>

          <div className='form-group-solicitud'>
            <label htmlFor='modelo' className='form-label-solicitud'>Modelo</label>
            <input placeholder='Modelo' className='form-input-solicitud' value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
          </div>
          </div>

          <div className='form-group-solicitud'>
            <label htmlFor='año' className='form-label-solicitud'>Año</label>
            <input type='date' placeholder='Año' className='form-input-solicitud' value={año} onChange={(e) => setAño(e.target.value)}></input>

          </div>
        

       <div>
       <div className='form-group-solicitud'>
          <label htmlFor='servicio' className='form-label-solicitud'>Servicio</label>
          <select id='servicio' className='form-select-solicitud' value={servicio} onChange={(e) => setServicio(e.target.value)}>
            <option value="" disabled>Seleccione un servicio</option>
            {selectServicio.map((servicio) => {
              return (
                <option value={servicio.id} key={servicio.id}>{servicio.tipo}</option>
              )
            })}
          </select>
        </div>

        <div className='form-group-solicitid'>
          <label htmlFor='descripcion' className='form-label-solicitud'>Descripción</label>
          <input
            type='text'
            id='descripcion'
            className='form-input-solicitid'
            placeholder='Descripción del servicio'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className='form-group-solicitud'>
          <label htmlFor='imagen' className='form-label-solicitud'>Imagen</label>
          <input
            type='file'
            id='imagen'
            className='form-input-solicitud'
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

       </div>

        <div className='form-actions-solicitud'>
          <button type='button' className='form-button reset' onClick={reiniciarFormulario}>Reiniciar</button>
          <button type='submit' className='form-button-solicitud' onClick={espacioVacio}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
