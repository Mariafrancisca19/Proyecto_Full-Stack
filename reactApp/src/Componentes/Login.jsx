import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';
import '../Estilos/Inicio.css'
import { guardarDatos, obtenerDatos } from '../JS/Fetch';
import { crearCookie } from '../cookiesJS/cookies';
import { motion } from 'framer-motion' // importacion framer motion para hacer un login animado


const Login = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    // Vacíar los campos al montar el componente
    setNombre("");
    setPassword("");
  }, []);



  const espaciosVacios = () => {
    if (nombre.trim() === "" || password.trim() === "") {  // validacion de espacios vacios 
      mostrarAlerta("error", "LLENE TODOS LOS CAMPOS")       // llamar a mis validaciones dentro de la funcion inicio
    }
  };

  const formatoNombre = (nombre) => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(nombre)) {
      console.log("nombre");

      mostrarAlerta("error", "El nombre de usuario no puede contener caracteres especiales");
    }
  };

  const longitudPassword = (password) => {
    if (password.length < 4) {
      console.log("pass");

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

    if (espaciosVacios()) {
      return
    } // llamar a mis validaciones
    if (formatoNombre(nombre)) {
      return
    }
    if (longitudPassword(password)) {
      return
    }

    try {
      const respuesta = await guardarDatos(datosLogin, "login/");
      if (respuesta.token) {
        mostrarAlerta("success", " BIENVENIDA ")
        crearCookie('token', respuesta.token_d_acceso, 1)   // recordar que el nombre es el que tiene en la app "cuentas -> views.py"
        crearCookie('usuarioID', respuesta.id_usuario, 1)
        crearCookie('superuser', false, 1)
        if (respuesta.superuser) {   // nombre que le puse en db de cuentas --> loginView
          crearCookie('superuser', true, 1)
          navigate('pag_Admin')
          return
        } else {
          navigate("/home")
        }
      }
    } catch (error) {
      mostrarAlerta("error", "Error al iniciar sesion");
      console.log(error);
    } finally{ 
      setNombre("")
      setPassword("")
    }

  };

  return (
    <div className='container-form'>
      <div className='container-imagen' alt='Logo'>
        {/* <img src='reactApp\src\Imagenes\img1.jpeg' /> */}
      </div>
      <form className='form'>
        <h1 className='form-title'>BIENVENIDOS</h1>
        <input className='input-login' placeholder="Username" value={nombre} type="name" onChange={(e) => setNombre(e.target.value)} /> <br />
        <input className='input-login' placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='btn-login' onClick={inicioSesion}>INICIAR</button><br />
        <a className='register-link' onClick={() => { navigate("/Registrarse") }}>NO TENGO CUENTA</a>
      </form>
    </div>
  )
}

export default Login










