import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';

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
    <div>
      <h1>BIENVENIDOS</h1>
      <form>
      <input placeholder="Correo Electrronico" value={correo} type="email" onChange={(e)=>setCorreo(e.target.value)}/> <br/>
      <input placeholder="Correo Electrronico"  value={password}type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </form>

      <button onClick={espaciosVacios}>REGISTRARSE</button>
      <a onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
    </div>
  )
}

export default Login
