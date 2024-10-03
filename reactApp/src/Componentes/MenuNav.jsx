import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Estilos/App.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

const MenuNav = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la búsqueda con searchTerm
        console.log("Buscar:", searchTerm);
    };

    return (
        <div>


<Navbar className="navbar" expand="lg" >
    <Container>
        <Navbar.Brand href="#home">
            <img style={{ width: '55px' }} className='logo' src='/src/Imagenes/logo.webp' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link  onClick={() => navigate("/home")}>HOME</Nav.Link>
                <Nav.Link  onClick={() => navigate("/destacado")}>DESTACADO</Nav.Link>
                <NavDropdown title="QUIENES SOMOS" id="basic-nav-dropdown"  >
                    <NavDropdown.Item  onClick={() => navigate("/sobrenosotros")}>MISION</NavDropdown.Item>
                    <NavDropdown.Item >UBICACION</NavDropdown.Item>
                    <NavDropdown.Item  onClick={() => navigate("/info")}>CONTACTO</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => navigate("/")}>CERRAR SECCION</NavDropdown.Item>
                    
                </NavDropdown>
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

                           


                        </Nav>
                        <Form inline onSubmit={handleSearch}>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="SEARCH"
                                            className=" mr-sm-2"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" >🔍</Button>
                                    </Col>
                                </Row>
                            </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default MenuNav
