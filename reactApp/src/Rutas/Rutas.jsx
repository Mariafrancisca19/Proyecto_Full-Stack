import Registrarse from "../Componentes/Registrarse";
import Login from "../Componentes/Login"
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AuthProvider from "./AuthProvider";
import Home from "../Paginas/Home";
import Destacado from "../Paginas/Destacado";
import Info from "../Componentes/Info";
import Contacto from "../Componentes/Contacto";
import SobreNosotros from "../Paginas/SobreNosotros";
import Ubicacion from "../Paginas/Ubicacion";
import RutaPrivada from "./RutaPrivada";
import Admin from "../Paginas/Admin";
import Compras from "../Paginas/Compras";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/InicioSesion",
        element: <Login />
    },

    {
        path: "/Registrarse",
        element: <Registrarse />
    },

    {
        path: "/home",
        element: <Home/>
        // element: <RutaPrivada route={<Home/>}/> prueba de ruta privada
    },

    {
        path: "/destacado",
        element: <Destacado/>
    },
    {
        path: "/info",
        element: <Info/>
    },

    {
        path: "/contacto",
        element: <Contacto/>
    },

    {
        path:"/sobrenosotros",
        element:<SobreNosotros/>
    },

    {
        path:"/ubicacion",
        element:<Ubicacion/>
    },

    {
        path:"/compras",
        element:<Compras/>
    },

    {
        path:'/pag_Admin',
        element: <RutaPrivada>  <Admin/>   </RutaPrivada>
    }

]);
const Rutas = () => {

    return (
            <RouterProvider router={router} />
    )

}

export default Rutas