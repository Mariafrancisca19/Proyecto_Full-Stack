import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';
import '../Estilos/Inicio.css'

const Login = () => {
  const navigate = useNavigate()   
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")


  const espaciosVacios=()=>{
    if (correo.trim() === "" || password.trim() === ""){
      mostrarAlerta("error","LLENE TODOS LOS CAMPOS")
    }
  
  }

  
  return (
    <div className='container-form'>
      <form className='form'>
        <h1>BIENVENIDOS</h1>
        <form>
        <input className='input-login' placeholder="Correo Electrronico" value={correo} type="email" onChange={(e)=>setCorreo(e.target.value)}/> <br/>
        <input className='input-login' placeholder="Clave"  value={password}type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </form>

        <button className='btn-login' onClick={espaciosVacios}>REGISTRARSE</button><br/>
        <a onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
      </form>
    </div>
  )
}

export default Login
