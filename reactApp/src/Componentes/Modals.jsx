import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../Estilos/modals.css'


function Modals(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="formal-modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
            Editar Servicio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formServiceName" className="mb-3">
              <Form.Label>Servicio</Form.Label>
              <Form.Control type="text" placeholder="Nombre del servicio" />
            </Form.Group>

            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="Precio" />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Descripción" />
            </Form.Group>

            <Button variant="primary" type="submit" className="update-button">
              ACTUALIZAR
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modals;


