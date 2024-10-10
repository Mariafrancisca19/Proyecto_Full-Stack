import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals (props) {
  return (
    <div>
      
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Servicio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div>
        <h4></h4>
        <label>Imagen</label>
        <input type='file'></input>
        <label>Servicio</label>
        <input placeholder='Nombre del servicio' type='name'></input>
        <label>Precio</label>
        <input placeholder='Precio' type='number'></input>
        <label>Descripcion</label>
        <input type='text' placeholder='Descripcion'></input>
        <button type='submit'>ACTUALIZAR</button>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default Modals;

