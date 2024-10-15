import React, { useState } from 'react';
import FormCard from './FormCard';
import '../Estilos/card.css';
import { deleteDatos } from '../JS/Fetch';
import Button from 'react-bootstrap/Button';
import { mostrarAlerta } from '../JS/SweetAlert';
import { crearCookie, traerCookie } from '../cookiesJS/cookies';


function ContenedorCard({ getServicio, btnEliminar, btnEditar, mostrarBotones }) {
  
    const [carrito, setCarrito] = ([])

    const eliminarDato = async (id) => {
        deleteDatos("servicioDelete", id + "/")
    };

    const p = (id) => {
        let ids = JSON.parse(traerCookie("ids")) || [];
        ids.push(id)
        crearCookie("ids", JSON.stringify(ids))
        setCarrito(ids)
        console.log(carrito);
    };


    return (
        <div className='d-flex gap-3 fs-4  wrap'>
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
                        btnAgregarAlCarrito={() => p(serv.id)}
                    />
                ))
            ) : (
                <p className='no-servicios'>No hay servicios disponibles.</p>
            )}
        </div>
    );
}

export default ContenedorCard;