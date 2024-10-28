import React from 'react'


const TallerCard = ({ nombre_taller, direccion, telefono }) => {
    return (
        <div className="taller-card">
            <h2 className="taller-info">Taller: {nombre_taller}</h2>
            <p className="taller-info"><strong>Dirección: </strong> {direccion}</p>
            <p className="taller-info"><strong>Teléfono: </strong> {telefono}</p>
        </div>
    );
}

export default TallerCard;
