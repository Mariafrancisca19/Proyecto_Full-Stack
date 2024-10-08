import Registrarse from "../Componentes/Registrarse";
import Login from "../Componentes/Login"
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AuthProvider from "./AuthProvider";
import Home from "../Paginas/Home";
import Destacado from "../Paginas/Destacado";
import QuienesSomos from "../Componentes/QuienesSomos";
import Info from "../Componentes/Info";
import Contacto from "../Componentes/Contacto";
import SobreNosotros from "../Paginas/SobreNosotros";
import Ubicacion from "../Paginas/Ubicacion";
import Carrito from "../Componentes/Carrito";
import FormServicio from "../Componentes/FormServicio";
import RutaPrivada from "./RutaPrivada";

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
        path:"/carrito",
        element:<Carrito/>
    },

    {
        path:'/formservicio',
        element: <RutaPrivada route={<FormServicio/>}/>
    }

]);
const Rutas = () => {

    return (
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
    )

}

export default Rutas