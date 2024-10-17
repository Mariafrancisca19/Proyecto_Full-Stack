import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';
import '../Estilos/Inicio.css'
import { guardarDatos, obtenerDatos } from '../JS/Fetch';
import { crearCookie } from '../cookiesJS/cookies';


const Login = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")


  const espaciosVacios = () => {
    if (nombre.trim() === "" || password.trim() === "") {  // validacion de espacios vacios 
      mostrarAlerta("error", "LLENE TODOS LOS CAMPOS")       // llamar a mis validaciones dentro de la funcion inicio
      console.log("entra");
    }
  };

  const formatoNombre = () =>{
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(nombre)){
      mostrarAlerta("error","El nombre de usuario no puede contener caracteres especiales");
    }
  };

  const longitudPassword = () => {
    if (password.length < 4) {
      mostrarAlerta("error", "La contraseña debe tener al menos 4 caracteres");
    }
  };


  const inicioSesion = async (e) => {
    e.preventDefault()
    //  se cree un objeto qque va obtener los datos del formulario
    const datosLogin = {
      username: nombre,
      password: password,

    };

    if(espaciosVacios()) // llamar a mis validaciones
    if(formatoNombre())
    if(longitudPassword())

    try {
      const respuesta = await guardarDatos(datosLogin, "login/");
      if (nombre == "Administrador" && password === "1907") {  // valiacion para el administrador al agregar servicio
        // localStorage.setItem('admin', true)
        crearCookie('admin',true,1)
        navigate('pag_Admin')
      }
      if (respuesta.token) {
        mostrarAlerta("success", " BIENVENIDA ")
        crearCookie('token',respuesta.token_d_acceso,1)   // recordar que el nombre es el que tiene en la app "cuentas -> views.py"
        navigate("/home")
      } else {

        mostrarAlerta("error", "Usuario no registrado");

      }

    } catch (error) {
      console.log(error);
      mostrarAlerta("error", "Error al iniciar sesión, inténtelo más tarde")
    }

  };

  return (
    <div className='container-form'>
      <form className='form'>
        <h1 className='form-title'>BIENVENIDOS</h1>
          <input className='input-login' placeholder="Username" value={nombre} type="name" onChange={(e) => setNombre(e.target.value)} /> <br />
          <input className='input-login' placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className='btn-login' onClick={inicioSesion}>INICIAR</button><br />
        <a className='register-link' onClick={() => { navigate("/Registrarse") }}>NO TENGO CUENTA</a>
      </form>
    </div>
  )
}

export default Login










