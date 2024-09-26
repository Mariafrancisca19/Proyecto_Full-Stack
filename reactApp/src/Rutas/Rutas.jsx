import Registrarse from "../Componentes/Registrarse";
import Login from "../Componentes/Login"
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AuthProvider from "./AuthProvider";
import Home from "../Paginas/Home";
import Destacado from "../Paginas/Destacado";
import QuienesSomos from "../Componentes/QuienesSomos";
import Info from "../Componentes/Info";

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

    },

    {
        path: "/destacado",
        element: <Destacado/>

    },

    {
        path: "/quiensomos",
        element: <QuienesSomos/>

    },

    {
        path: "/info",
        element: <Info/>

    },

]);
const Rutas = () => {

    return (
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
    )

}

export default Rutas