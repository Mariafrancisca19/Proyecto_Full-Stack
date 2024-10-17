// import React, { useState, useEffect } from 'react'
// import { traerCookie, crearCookie } from '../cookiesJS/cookies'
// import { json } from 'react-router-dom'


// const Compras = () => {

//   const [carrito, setCarrito] = useState([])

//   useEffect(() => {
//     const guardarCarrito = JSON.parse(traerCookie('carrito')) || [];  // cargar el carrito desde la cookies
//     setCarrito(guardarCarrito);
//   },[]);

//   const eliminarCarrito = (id) =>{

//     let ids = carrito.filter((item) => item !== id); // eliminamos los servicios por medio del id
//     crearCookie('carrito',JSON.stringify(ids), 7) 
//     setCarrito(ids);  // actualizamos el estado 
//   };




//   return (
//     <div>
//       <h2>carrito</h2>
//       {carrito.length === 0 ? ( 
//         <p>El carrito esta vacio</p>
//       ): (
//         <ul>{carrito.map((id) => (
//           <li key={id}>
//             Producto ID: {id}
//             <button onClick={() => eliminarCarrito(id)}>Eliminar</button>
//           </li>
//           ))}
//         </ul>
//       )}

//     </div>
//   )
// }

// export default Compras
