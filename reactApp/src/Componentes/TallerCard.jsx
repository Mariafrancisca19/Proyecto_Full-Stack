import React from 'react'


const TallerCard = ({ nombre_taller, direccion, telefono,btnEliminar,btnEditar }) => {
    return (
        <div className="taller-card">
            <h2 className="taller-info">Taller: {nombre_taller}</h2>
            <p className="taller-info"><strong>Dirección: </strong> {direccion}</p>
            <p className="taller-info"><strong>Teléfono: </strong> {telefono}</p>
            <button className='botones-margin' onClick={btnEliminar}>Eliminar</button>
            <button className='botones-margin' onClick={btnEditar}>Editar</button>
        </div>
    );
}

export default TallerCard;
