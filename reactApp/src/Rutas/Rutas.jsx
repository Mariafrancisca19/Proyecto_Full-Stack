import Login from "../Componentes/Login";
import Registrarse from "../Componentes/Registrarse";
import Home from "../Paginas/Home";


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