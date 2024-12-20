import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';
import {guardarDatos} from '../JS/Fetch';
import '../Estilos/index.css'


const Registrarse = () => {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [bithdate, setBithdate] = useState("")
  const [correoR, setCorreoR] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [okContrasena, setOkContrasena] = useState("")

  // funcion para validar que no hayan espacios vacios
  const espacioVacio=()=>{
    if (nombre.trim() === "" || apellido.trim() === "" || bithdate.trim() === "" || correoR.trim() === "" || contrasena.trim() === '')
    {
      mostrarAlerta("error","LLENE TODOS LOS CAMPOS");
      return true;
    }
  
  };
  

  const formatoNombreApellido = () => {      //regex --> expresion regular 
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(nombre) || !regex.test(apellido)) {  //validacion del formato en el nombre y el apellido 
      mostrarAlerta("error", "El nombre y apellido solo pueden contener letras");
      return true;
  }

  if (nombre.length < 2 || apellido.length < 2) {
    mostrarAlerta("error", "El nombre y apellido deben tener al menos 2 caracteres");
    return true
  }
}

  // Validar la seguridad de la contraseña
  const validarContrasena = () => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    if (regex.test(contrasena)) {
      mostrarAlerta("error", "La contraseña debe tener al menos 4 caracteres, incluir una mayúscula, un número y un carácter especial");
      return true;
    }
    return false;
  };



  // enviar los datos al servidor usando mi guardarDatos 
  const handleSubmit = async (e) => {
    e.preventDefault();  /*evita que la pagina se recargue*/
    console.log("entra");
    if (espacioVacio()){  //si la contrasena o los campos estan vacios se detiene
        return
    }
    // if(validarContrasena()){
    //   return
    // }
    // if(formatoNombreApellido()){
    //   return
    // } 

    // crear el objeto que contiene todos los datos del formulario
    const datosRegistro = {
      username : nombre,
      last_name : apellido,
      fecha_nacimiento : bithdate,
      email:correoR,
      password:contrasena,
    };

    try {
      const respuesta = await guardarDatos(datosRegistro,"registro/"); /*llamar a mi metodo rara guargar los datos */
      if(respuesta.success){  /* respuesta exitosa*/
        mostrarAlerta("success","Registro exitoso");
        navigate("/"); /*  redireccionar a la pagina principal*/
      } else {
        mostrarAlerta("error","Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      mostrarAlerta("error","Error en la conexion con el servidor")
    }

  }




  return (
    <div className='container-registro'>
      <form className='formumario'onSubmit={handleSubmit}>
      <h1>REGISTER</h1>
      <label>Name </label>
      <input  className='input-registro' placeholder="First Name" value={nombre} type="name" onChange={(e)=>setNombre(e.target.value)}/><br/>
      <label>Last Name </label><br/>
      <input  className='input-registro' placeholder="Last Name" value={apellido} type="last_name" onChange={(e)=>setApellido(e.target.value)}/>
      <br/>
      <label>Birthdate </label><br/>
      <input  className='input-registro' placeholder="Insert Date" value={bithdate} type="date" onChange={(e)=>setBithdate(e.target.value)}/> <br/>

      <label>Email </label><br/>
      <input  className='input-registro' placeholder="Email Address" value={correoR} type="email" onChange={(e)=>setCorreoR(e.target.value)}/> <br/>

      <label>Password </label><br/>
      <input  className='input-registro' placeholder="Password" value={contrasena} type="password" onChange={(e)=>setContrasena(e.target.value)}/> <br/>

      <label>Password confirmation </label><br/>
      <input  className='input-login' placeholder="Password confirmation" value={okContrasena} type="password" onChange={(e)=>setOkContrasena(e.target.value)}/> <br/>
      <button className='btn-registro' type='submit' onClick={handleSubmit}>Sign Up</button><br/>
      <button className='btn-inicio' onClick={()=>navigate('/')}>Back</button> 
      </form>
    </div>
  )
}

export default Registrarse
