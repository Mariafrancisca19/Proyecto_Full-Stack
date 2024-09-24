import React from 'react';


const Login = () => {
    

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
