import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Offcanvas, Row, Col } from 'react-bootstrap';
import '../Estilos/App.css';
import '../Estilos/navbar.css';

const MenuNav = () => {
  const navigate = useNavigate();
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
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
        <img style={{ width: '55px' }} className='logo' src='/src/Imagenes/logo.webp' alt='logo' onClick={()=>navigate("/home")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate("/home")}>HOME</Nav.Link>
            <Nav.Link onClick={() => navigate("/destacado")}>DESTACADO</Nav.Link>
            <NavDropdown title="NUESTRA EMPRESA" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/sobrenosotros")}>MISION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/ubicacion")}>UBICACION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/info")}>CONTACTO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/")}>CERRAR SESION</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-light" onClick={handleShow} className="nav-button">
              SERVICIOS
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>TODOS LOS SERVICIOS</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li>Frenos</li>
                  <li>Aceite</li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
          <Form inline="true" onSubmit={handleSearch} className="d-flex search-bar">
            <Form.Control
              type="text"
              placeholder="Buscar..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" className="search-button">
              <i className="bi bi-search"></i>
            </Button>
            <Button className="cart-button" variant="outline-light">
              <i className="bi bi-cart3"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;