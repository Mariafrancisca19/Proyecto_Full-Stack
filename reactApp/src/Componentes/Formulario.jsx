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
    <div className='container-form'>
      <form className='form3'>
      <label> SOLICITUD MANTENIMIENTO</label>
    <div>
    <label  className='input-services'> Marca</label>
    <select name = 'marca' value={marca} onChange={(e)=>setMarca(e.target.value)}><br/>
    <option value="seleccione">Seleccione Marca</option>
    <option value="toyota">Toyota</option>
    <option value="honda">Honda</option>
    <option value="ford">Ford</option>
    <option value="chevrolet">Chevrolet</option>
    <option value="bmw">BMW</option>
    <option value="mercedes-benz">Mercedes-Benz</option>
    <option value="nissan">Nissan</option>
    <option value="audi">Audi</option>
    <option value="hyundai"> Hyundai </option>
    <option value="volkswagen">Volkswagen</option>
    <option value="kia">Kia</option>
    <option value="mazda">Mazda</option>
    <option value="subaru">Subaru</option>
    <option value="jeep">Jeep</option>
    <option value="lexus">Lexus</option>
    <option value="porsche">Porsche</option>
    <option value="tesla">Tesla</option>
    <option value="land_rover">Land Rover</option>
    <option value="volvo">Volvo</option>
    <option value="alfa_romeo">Alfa Romeo</option>
    <option value="ferrari">Ferrari</option>
    <option value="lamborghini">Lamborghini</option>
    <option value="peugeot">Peugeot</option>
    <option value="renault">Renault</option>
    <option value="mitsubishi">Mitsubishi</option>
    </select><br/>
    <label className='input-services'>Modelo</label>
    <select name = 'modelo' value={modelo} onChange={(e)=>setModelo(e.target.value)}><br/>
    <option value="seleccione">Seleccione Modelo</option>
    <option value="corolla">Corolla</option>
    <option value="rav4">RAV4</option>
    <option value="camry">Camry</option>
    <option value="accord">Accord</option>
    <option value="cr-v">CR-V</option>
    <option value="mustang">Mustang</option>
    <option value="f-150">F-150</option>
    <option value="camaro">Camaro</option>
    <option value="">Silverado</option>
    <option value="">Serie 3</option>
    <option value="">Serie 7</option>
    <option value="">Clase C </option>
    <option value="">Clase E</option>
    <option value="">Rogue</option>
    <option value="">Sentra</option>
    <option value="">Q7</option>
    <option value="">A6</option>
    <option value="">Sonata</option>
    <option value="">Tucson</option>
    <option value="">Golf</option>
    <option value="">Tiguan</option>
    <option value="">Optima</option>
    <option value="">Sportage</option>
    <option value="">CX-5</option>
    <option value="">3</option>
    <option value="">Outback</option>
    <option value="">Forester</option>
    <option value="">Grand Cherokee</option>
    <option value="">Compass</option>
    <option value="">UX 250h</option>
    <option value="">GX 460</option>
    <option value="">Cayenne</option>
    <option value="">Model X</option>
    <option value=""> Defender</option>
    <option value=""> XC90</option>
    <option value="">Tonale</option>
    <option value="">F8 Tributo</option>
    <option value=""> Urus </option>
    <option value=""> 5008 </option>
    <option value="">  Captur </option>
    <option value=""> Outlander </option>
    </select><br/>
    <label  className='input-services' >Año</label>
    <select name='año' value={año} onChange={(e)=>setAño(e.target.value)}><br/>
    <option value="">Seleccione Año</option>
    <option value="">2019</option>
    <option value="">2020</option>
    <option value="">2021</option>
    <option value="">2022</option>
    </select><br/>
    <label className='input-services'>Servicio</label>
    <select name="servicio" required value={servicio} onChange={(e)=>setServicio(e.target.value)}><br/>
            <option value="">Seleccione un servicio</option>
            <option value="mantenimiento_general">Mantenimiento General</option>
            <option value="cambio_aceite">Cambio de Aceite y sustitucion del filtro</option>
            <option value="rotacion_neumatico">Rotacion de neumaticos </option>
            <option value="frenos">Revisión de Frenos</option>
            <option value="alineacion">Alineación y Balanceo</option>
            <option value="filtro_motor">Filtro de aire del motor</option>
            <option value="otros">Otros</option>
    </select><br/>
    <label className='input-services'>Descripcion</label>
    <input placeholder='Descripcion del servicio' type='text'value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}></input><br/>
    <label className='input-services' >Imagen</label>
    <input  type='file' name="imagen" value={imagen} onChange={(e)=>setImagen(e.target.value)} ></input><br/>
    <button  className='input-services'type='submit' onClick={espacioVacio}>Enviar</button><br/>
    <button className='input-services' type='button' >Reiniciar</button>
    </div>
      </form>



      
    </div>
  )
}

export default Formulario


