import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { mostrarAlerta } from '../JS/SweetAlert';

const esAdmin=()=>{
  const localAdmin = localStorage.getItem("admin")
  return localAdmin
}
const RutaPrivada = ({children}) => {
  return esAdmin() ? children : <h1>Pagina no accesible</h1>
}

export default RutaPrivada;
