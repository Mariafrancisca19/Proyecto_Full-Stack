import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';


const Atras = () => {
    const navigate = useNavigate()
    const rutas = ["/home","/quiensomos",'/destacados','/info']
    return(
            <Pagination>
              <Pagination.First onClick={()=>navigate(rutas[0])}/>
              <Pagination.Prev />
              <Pagination.Item onClick={()=>{navigate("/home")}}>{1}</Pagination.Item>
        
              <Pagination.Item onClick={()=>{navigate("/destacado")}}>{2}</Pagination.Item>
              <Pagination.Item activeonClick={()=>{navigate("/quiensomos")}}>{3}</Pagination.Item>
              <Pagination.Item onClick={()=>{navigate("/info")}}>{4}</Pagination.Item>
              <Pagination.Item onClick={()=>{navigate("/info")}}>{5}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last onClick={()=>navigate(rutas[3])} />
            </Pagination>
          );
}
export default Atras
