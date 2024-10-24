import { traerCookie } from "../cookiesJS/cookies";

const url = "http://127.0.0.1:8000/api/"
const token = traerCookie('token')          // variables globales 
// CRUD
// metodo get extraer los datos
const obtenerDatos = async (enpoint) => {
    try {

        const peticion = await fetch(`${url}${enpoint}`, {
            method: "GET",
            headers: {
                "Content-type": "application; charset=UTF-8"
            }
        });

        const responsa = await peticion.json();
        return responsa;
    } catch (error) {
        console.log(error)
    }
}

export { obtenerDatos }

// metodo post para guardar datos

const guardarDatos = async (obj,enpoint) => {
    try {

        const response = await fetch(`${url}${enpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }

}

export { guardarDatos}

// metodo put para actualizar los datos

const actualizarDatos = async (obj,enpoint, id) => {
    try {

        const response = await fetch(`${url}${enpoint}/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },

            body: JSON.stringify(obj)

        });

        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

export { actualizarDatos }

// metodo delete para eliminar los datos 

const deleteDatos = async (enpoint, id) => {
    try {
        const response = await fetch(`${url}${enpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authentication': `Bearer ${token}`
            }
        });

        return await response.json()

    } catch (error) {
        console.log(error);

    }

}

export {deleteDatos}


const post=async(obj,endpoint)=>{
  try {
      const peticion = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`,{
          method:"POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify(obj)
      })
      console.log(peticion);

      if (!peticion.ok) {
        const errorText = await peticion.text(); // Get the response body as text
        console.error(`Error: ${peticion.status} ${errorText}`);
        throw new Error(`HTTP error! status: ${peticion.status}, message: ${errorText}`);
    }
    
      return peticion
  } catch (error) {
    console.error(error);
    
  }
}

export {post}

// para hacer un post reutilizable mejor trabajar en un post general y con el enpoint 


      // post no reutilizable
// const postMantenimiento=async(obj)=>{
//     const peticion = await fetch('http://127.0.0.1:8000/api/mantenimiento/',{
//         method:"POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(obj)
//     })
// }
// export {postMantenimiento}
    