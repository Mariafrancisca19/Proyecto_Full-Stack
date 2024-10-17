import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Offcanvas } from 'react-bootstrap';
import '../Estilos/App.css';
import '../Estilos/navbar.css';
import { obtenerDatos } from '../JS/Fetch';


const MenuNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [servicio, setServicio] = useState([]);  // estado de almacenamiento
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda
  const [filtrarServicios, setFiltrarServicios] = useState([]); // Estado para servicios filtrados

  // useEffect para obtener los servicios del método get
  useEffect(() => {
    const mostrarServ = async () => {
      const data = await obtenerDatos("servicio/");
      console.log(data);
      setServicio(data); // Guardamos los servicios
      setFiltrarServicios(data); // inicializamos los servicios filtrados
    }
    mostrarServ();
  }, []);

  //  búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    // Filtrar los servicios según el término de búsqueda
    const filtrarServicios = servicio.filter(serv =>
      serv.tipo.toLowerCase().includes(searchTerm.toLowerCase()) // Filtramos por el tipo de servicio
    );
    setFiltrarServicios(filtrarServicios); // Actualizamos los servicios filtrados
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: '55px' }} className='logo' src='/src/Imagenes/logo.webp' alt='logo' onClick={() => navigate("/home")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate("/home")}>HOME</Nav.Link>
            <Nav.Link onClick={() => navigate("/destacado")}>DESTACADO</Nav.Link>
            <NavDropdown title="NUESTRA EMPRESA" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/sobrenosotros")}>MISION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/ubicacion")}>UBICACION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/servicio")}>CONTACTO</NavDropdown.Item>
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
                <Form onSubmit={handleSearch} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Buscar servicio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // actualiza el estado del término de búsqueda
                  />
                  <Button type="submit" className="mt-2">Buscar</Button>
                </Form>
                <ul>
                  {filtrarServicios && filtrarServicios.length > 0 ? (
                    filtrarServicios.map((serv, index) => (
                      <li key={index}>{serv.tipo}</li>
                    ))
                  ) : (
                    <li>No hay servicios disponibles</li>
                  )}
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
          <Form inline="true" className="d-flex search-bar">
            <Button className="cart-button">
              <i className="bi bi-person-circle"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;
