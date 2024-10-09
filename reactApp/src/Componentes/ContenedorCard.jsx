import React from 'react';
import FormCard from './FormCard';

function ContenedorCard({ getServicio, btnEliminar, btnEditar, mostrarBotones }) {
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
                    />
                ))
            ) : (
                <p>No hay servicios disponibles.</p> 
            )}
        </div>
    );
}

export default ContenedorCard;
