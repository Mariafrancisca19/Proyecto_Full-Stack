import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';
import '../Estilos/atras.css';


const Atras = () => {
  const navigate = useNavigate();

  // Definir las rutas de navegación
  const rutas = [
    { path: "/home", label: "Inicio" },
    { path: "/destacado", label: "Destacado" },
    { path: "/sobrenosotros", label: "Quiénes Somos" },
    { path: "/ubicacion", label: "Ubicacion" },
    { path: "/info", label: "Información" },
  ];

  // Estado para la página actual
  const [activePage, setActivePage] = useState(1);

  // Función para manejar la navegación y establecer la página activa
  const handlePageChange = (pageIndex) => {
    setActivePage(pageIndex);
    navigate(rutas[pageIndex - 1].path);
  };

  return (
    <Pagination className="custom-pagination">
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)}
      />
      {rutas.map((ruta, index) => (
        <Pagination.Item
          key={index}
          active={index + 1 === activePage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          handlePageChange(activePage < rutas.length ? activePage + 1 : rutas.length)
        }
      />
      <Pagination.Last onClick={() => handlePageChange(rutas.length)} />
    </Pagination>
  );
};

export default Atras;
