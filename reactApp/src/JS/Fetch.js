const url = "http://localhost:8000/"

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

const guardarDatos = async (enpoint) => {
    try {

        const response = await fetch(`${url}${enpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });

        return await response.json();


    } catch (error) {
        console.log(error)
    }

}

export { guardarDatos }

// metodo put para actualizar los datos

const actualizarDatos = async (enpoint, id) => {
    try {

        const response = await fetch(`${url}${enpoint}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application; charset=UTF-8"
            },

            body: JSON.stringify()

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
                'Content-Type': 'application/json'
            }
        });

        return await response.json()

    } catch (error) {
        console.log(error);

    }

}

export {deleteDatos}






