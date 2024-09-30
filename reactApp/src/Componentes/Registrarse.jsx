import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarAlerta } from '../JS/SweetAlert';
import '../Estilos/index.css'

const Registrarse = () => {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [bithdate, setBithdate] = useState("")
  const [correoR, setCorreoR] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [okContrasena, setOkContrasena] = useState("")

  const espacioVacio=()=>{
    if (nombre.trim() === "" || apellido.trim() === "" || bithdate.trim() === "" || correoR.trim() === "" || contrasena.trim() === "" || okContrasena.trim() === ""){
      mostrarAlerta("error","LLENE TODOS LOS CAMPOS")
    }
  }


  return (
    <div>
    <h1>REGISTER</h1>
      <form>
      <label>Name </label>
      <input placeholder="First Name" value={nombre} type="name" onChange={(e)=>setNombre(e.target.value)}/><br/>
      <label>Last Name </label><br/>
      <input placeholder="Last Name" value={apellido} type="last_name" onChange={(e)=>setApellido(e.target.value)}/>
      <br/>
      <label>Birthdate </label><br/>
      <input placeholder="Insert Date" value={bithdate} type="date" onChange={(e)=>setBithdate(e.target.value)}/> <br/>

      <label>Email </label><br/>
      <input placeholder="Email Address" value={correoR} type="email" required onChange={(e)=>setCorreoR(e.target.value)}/> <br/>

      <label>Password </label><br/>
      <input placeholder="Password" value={contrasena} type="password" onChange={(e)=>setContrasena(e.target.value)}/> <br/>

      <label>Password confirmation </label><br/>
      <input placeholder="Password confirmation" value={okContrasena} type="password" onChange={(e)=>setOkContrasena(e.target.value)}/> <br/>
      <button onClick={espacioVacio}>Sign Up</button>
      </form>
      <button onClick={()=>navigate('/')}>Back</button> 
    </div>
  )
}

export default Registrarse
