import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

const MenuNav = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>


            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img style={{ width: '75px' }} src='/src/Imagenes/logo.webp' alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={()=>{navigate("/home")}}>HOME</Nav.Link>
                            <Nav.Link href="#link" onClick={()=>{navigate("/destacado")}}>DESTACADO</Nav.Link>
                            <NavDropdown title="QUIENES SOMOS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={()=>{navigate("/quiensomos")}}>MISION</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    UBICACION
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" onClick={()=>{navigate("/info")}}>CONTACTO</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"onClick={()=>{navigate("/")}}>
                                    CERRAR SECCION
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="SEARCH"
                                            className=" mr-sm-2"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit">🔍</Button>
                                    </Col>
                                </Row>
                            </Form>


                        </Nav>
                            <Button variant="primary" onClick={handleShow}>
                                servicios
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>TODOS LOS SERVICIOS</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                    <li>Freno</li>
                                    <li>Aceite</li>
                                    </ul>
                                    
                                    
                                </Offcanvas.Body>
                            </Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>










        </div>
    )
}

export default MenuNav
