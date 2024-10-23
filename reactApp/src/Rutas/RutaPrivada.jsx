import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { mostrarAlerta } from '../JS/SweetAlert';
import { traerCookie } from '../cookiesJS/cookies';


const esAdmin=()=>{
  const localAdmin = traerCookie("superuser")
  if(localAdmin==='true'){
  return true
  }
}
const RutaPrivada = ({children}) => {
  return esAdmin() ? children : <h1>Pagina no accesible</h1>
}

export default RutaPrivada;
