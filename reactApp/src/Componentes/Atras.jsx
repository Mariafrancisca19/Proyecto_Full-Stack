import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../Estilos/atras.css';


const Atras = ({ totalPages, activePage, onPageChange }) => {
  // Función para manejar la navegación y establecer la página activa
  const handlePageChange = (pageIndex) => {
    if (pageIndex >= 1 && pageIndex <= totalPages) {
      onPageChange(pageIndex);
    }
  };

  return (
    <Pagination className="custom-pagination">
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)}
      />
      {[...Array(totalPages)].map((_, index) => (
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
          handlePageChange(activePage < totalPages ? activePage + 1 : totalPages)
        }
      />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );
};

export default Atras;
