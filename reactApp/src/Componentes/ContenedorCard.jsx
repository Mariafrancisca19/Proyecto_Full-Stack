import React, { useState } from 'react';
import FormCard from './FormCard';
import '../Estilos/card.css';
import { deleteDatos } from '../JS/Fetch';
import Button from 'react-bootstrap/Button';
import Modal from '../Componentes/Modals';
import MyVerticallyCenteredModal from '../Componentes/ModalsAPP'
import { mostrarAlerta } from '../JS/SweetAlert';


function ContenedorCard({ getServicio, btnEliminar, btnEditar, mostrarBotones }) {

    const [modalShow, setModalShow] = useState(false); // estado para el modals
    const [selectedServicio, setSelectedServicio] = useState(null)
    const [carrito, setCarrito] = useState([]); // estado para almacenar los servicios agregados al carrito

    const eliminarDato = async (id) => {
        deleteDatos("servicioDelete", id + "/")
    };

    const p = (id) => {
        let ids = JSON.parse(localStorage.getItem("ids")) || [];
        ids.push(id)
        localStorage.setItem("ids", JSON.stringify(ids))
        setCarrito(ids)
        console.log(carrito);

    };


    const handleEditarClick = (serv) => {
        setSelectedServicio(serv);  // Guarda el servicio seleccionado
        setModalShow(true);  // Muestra el modal
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
                        btnEditar={() => handleEditarClick(serv)}
                        btnAgregarAlCarrito={() => p(serv.id)}
                    />
                ))
            ) : (
                <p className='no-servicios'>No hay servicios disponibles.</p>
            )}



            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)
                }
                servicio={selectedServicio}
            />

        </div>
    );
}

export default ContenedorCard;