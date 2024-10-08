import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const RutaPrivada = ({route}) => {
 const {auth} = useContext(AuthContext) ;
 return auth ? route : <Navigate to={'/'}/>


  return (
    <div>
      
    </div>
  )
}

export default RutaPrivada
