import Registrarse from "../Componentes/Registrarse";
import Login from "../Componentes/Login";
import Home from "../Paginas/Home";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AuthProvider from "./AuthProvider";

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

]);
const Rutas = () => {

    return (
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
    )

}

export default Rutas