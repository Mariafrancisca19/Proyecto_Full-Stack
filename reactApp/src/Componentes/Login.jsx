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
    if (nombre.trim() === "" || password.trim() === "") {
      mostrarAlerta("error", "LLENE TODOS LOS CAMPOS")
    }

  }


  const inicioSesion = async (e) => {
    e.preventDefault()
    //  se cree un objeto qque va obtener los datos del formulario
    const datosLogin = {
      username: nombre,
      password: password,

    };

    try {
      const respuesta = await guardarDatos(datosLogin, "login/");
      if (nombre == "Administrador" && password === "1907") {  // valiacion para el administrador al agregar servicio
        // localStorage.setItem('admin', true)
        crearCookie('admin',true,1)
        navigate('pag_Admin')

      }
      if (respuesta.token) {
        mostrarAlerta("success", " BIENVENIDA ")
        navigate("/home")
      } else {

        mostrarAlerta("error", "Usuario no registrado");

      }

    } catch (error) {
      console.log(error);

    }

  };

  return (
    <div className='container-form'>
      <form className='form'>
        <h1>BIENVENIDOS</h1>
          <input className='input-login' placeholder="Username" value={nombre} type="name" onChange={(e) => setNombre(e.target.value)} /> <br />
          <input className='input-login' placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className='btn-login' onClick={inicioSesion}>INICIAR</button><br />
        <a onClick={() => { navigate("/Registrarse") }}>NO TENGO CUENTA</a>
      </form>
    </div>
  )
}

export default Login











//    mostrarAlerta("error", "Hubo un error con la conexión al servidor");