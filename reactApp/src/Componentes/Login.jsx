import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()   
  

  return (
    <div>
      <h1>BIENVENIDOS</h1>
      <form>
      <input placeholder="Correo Electrronico" type="email"/> <br/>
      <input placeholder="Correo Electrronico" type="password"/>
      </form>

      <button>REGISTRARSE</button>
      <a onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
    </div>
  )
}

export default Login
