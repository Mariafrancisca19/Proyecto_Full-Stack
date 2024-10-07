import React from 'react'

const Card = () => {
    return (
        <div>
            <h1 style={{fontFamily:'-moz-initial'}}>Servicios</h1>
            {/* Contenedor de tarjetas con flexbox */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen3.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento de Aceite:</h5>
                        <p className="card-text">
                        Este tipo de mantenimiento se realiza para evitar problemas mayores en el futuro.
                        </p>
                    </div>
                </div>

                {/* <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen3.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento de sensores de desgaste de frenos.</h5>
                        <p className="card-text">
                        Usa datos y monitoreo continuo para anticipar fallos en base al comportamiento del vehículo, minimizando paradas imprevistas. 
                        </p>
                    </div>
                </div> */}
{/* 
                <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen3.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento de los Sistemas Eléctricos:</h5>
                        <p className="card-text">
                            Se debe cambiar a intervalos que oscilan entre 3.000 y 12.000 millas, según tu MSMS.
                        </p>
                    </div>
                </div> */}

                <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen2.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento de Neumáticos:</h5>
                        <p className="card-text">
                        Involucra la revisión y rotación de los neumáticos, la alineación y balanceo, y la verificación de la presión para asegurar una conducción segura y eficiente.
                        </p>
                    </div>
                </div>

                {/* <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen3.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento de Frenos:</h5>
                        <p className="card-text">
                        Verificar y reemplazar las pastillas de frenos, discos o tambores de freno, líquido de frenos, entre otros. Es crucial para la seguridad.
                        </p>
                    </div>
                </div> */}

                {/* <div className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img src="src/Imagenes/imagen3.webp" className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5>Mantenimiento del Sistema de Enfriamiento:</h5>
                        <p className="card-text">
                        Revisión del nivel y calidad del líquido refrigerante, inspección de mangueras, radiador y ventiladores para evitar sobrecalentamiento del motor.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Card
