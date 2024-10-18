import React, { useState } from 'react';
import FormCard from './FormCard';
import '../Estilos/card.css';
import { deleteDatos } from '../JS/Fetch';
import Button from 'react-bootstrap/Button';
import { mostrarAlerta } from '../JS/SweetAlert';
import { crearCookie, traerCookie } from '../cookiesJS/cookies';


function ContenedorCard({ getServicio, btnEliminar, btnEditar, mostrarBotones }) {
  
    const [carrito, setCarrito] = useState(JSON.parse(traerCookie("ids")) || [])

    const eliminarDato = async (id) => {
        deleteDatos("servicioDelete", id + "/")
    };

    const guardarCarrito = (id) => {
        let ids = JSON.parse(traerCookie("ids")) || [];
        ids.push(id)
        crearCookie("ids", JSON.stringify(carrito))
        setCarrito(ids)
        console.log(carrito);
    };


    return (
        <div>
      <div style={{fontFamily:'fantasy', textAlign:'center',marginTop:'15px'}}>
        <h1>SERVICIOS</h1>
      </div>
        <div className='flex-row d-flex flex-wrap justify-content-center gap-4'>
            {Array.isArray(getServicio) && getServicio.length > 0 ? (
                getServicio.map(serv => (
                    <FormCard
                        key={serv.id}
                        servicio={serv.tipo}
                        precio={serv.monto}
                        imagen={serv.imagen}
                        descripcion={serv.descripcion}
                        btnEliminar={() => eliminarDato(serv.id)}
                        btnEditar={()=>btnEditar(serv)}
                        btnAgregarAlCarrito={() => guardarCarrito(serv.id)}
                        
                    />
                ))
            ) : (
                <p className='no-servicios'>No hay servicios disponibles.</p>
                
            )}
        </div>
        </div>
    );
}

export default ContenedorCard;