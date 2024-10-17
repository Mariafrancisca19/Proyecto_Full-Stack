import React from 'react'


const Info = () => {
  return (
    <div>
     
     <section className="info-header">
        <h1 className="info-title" style={{marginTop:'40px'}}>¿Necesitas ayuda?</h1>
        <h2 className="info-subtitle">¡Contáctanos!</h2>
        <p className="info-text">Estamos aquí para ayudarte en todo lo que necesites.</p>
        <h3 className="info-followup">Dar seguimiento a mi proceso:</h3>
      </section>
      <a href="https://www.whatsapp.com/" className="info-whatsapp-link">WhatsApp (Contacta a tu asesor)</a>
      
    </div>
  )
}

export default Info
