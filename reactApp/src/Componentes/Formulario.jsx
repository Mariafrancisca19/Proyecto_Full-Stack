import React, {useState} from 'react'
import { mostrarAlerta } from '../JS/SweetAlert'


const Formulario = () => {

 const [marca, setMarca] = useState("")
 const [modelo, setModelo] = useState("")
 const [año, setAño] = useState("")
 const [servicio, setServicio] = useState("")
 const [descripcion, setDescripcion] = useState("")
 const [imagen, setImagen] = useState("")
// cambiar la marca,modelo y ano por defecto en un select
// preguntar al profe de la validacion de la imagen dentro de la funcion espacios vacios

 const espacioVacio =()=>{
    if(marca.trim() === "" || modelo.trim() === "" || año.trim() === "" || servicio.trim() === "" || descripcion.trim() === "")
        mostrarAlerta("error","Campos obligatorios")
        // setDescripcion("") --> post
 }

  return (
    <div>
      <form>
      <label>Mantenimiento</label>
    <div>
    <label>Marca</label>
    <input placeholder='Marca' type='marca'value={marca} onChange={(e)=>setMarca(e.target.value)}></input><br/>
    <label>Modelo</label>
    <input placeholder='Modelo' type='modelo' value={modelo} onChange={(e)=>setModelo(e.target.value)}></input><br/>
    <label >Año</label>
    <input placeholder='Año'type='number' value={año} onChange={(e)=>setAño(e.target.value)}></input>
    <label>Servicio</label>
    <select name="servicio" required value={servicio} onChange={(e)=>setServicio(e.target.value)}>
            <option value="">Seleccione un servicio</option>
            <option value="mantenimiento_general">Mantenimiento General</option>
            <option value="cambio_aceite">Cambio de Aceite y sustitucion del filtro</option>
            <option value="rotacion_neumatico">Rotacion de neumaticos </option>
            <option value="frenos">Revisión de Frenos</option>
            <option value="alineacion">Alineación y Balanceo</option>
            <option value="filtro_motor">Filtro de aire del motor</option>
            <option value="otros">Otros</option>
    </select><br/>
    <label>Descripcion</label>
    <input placeholder='Descripcion del servicio' type='text'value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}></input><br/>
    <label >Imagen</label>
    <input  type='file' name="imagen" value={imagen} onChange={(e)=>setImagen(e.target.value)} ></input><br/>
    <button type='submit' onClick={espacioVacio}>Enviar</button>
    <button type='button' ></button>
    </div>
      </form>
    </div>
  )
}

export default Formulario


