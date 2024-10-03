import React from 'react'
import '../Estilos/App.css'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='container-footer' style={{ backgroundColor: '#3e4551' }}>
    <div className="container my-5 footer">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white pie-pagina" >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Auto Service Arreglos Ya</h5>
                <p>Nos reservamos todos los derechos. Nos esforzamos por brindarte soluciones automotrices de confianza y calidad, asegurando que tu auto esté siempre en las mejores condiciones. Tecnología avanzada, servicio personalizado y atención constante.</p>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Servicios de Atencion</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#" className="text-white"> Lunes a Viernes: 7:00 AM - 7:00 PM</a>
                  </li>
                  <li>
                    <a href="#" className="text-white"> Sábados: 8:00 AM - 6:00 PM</a>
                  </li>
                  <li>
                    <a href="#" className="text-white"> Domingos: 8:00 AM - 5:00 PM.</a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contacto</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#" className="text-white"> <p><i class="bi bi-geo-fill"></i>Calle Ross</p>
      
                    <iframe style={{borderRadius:'100px', width:'100px', height:'100px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9166.34610492348!2d-84.19598921484888!3d9.9405677296944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1727899059404!5m2!1ses-419!2scr" ></iframe>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white"><i class="bi bi-envelope-at"> franciscasaborio19@gmail.com </i></a>
                  </li>
                  <li>
                    <a href="#" className="text-white"><i class="bi bi-telephone"></i> + 506 1007 5600</a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase"> Populares </h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#" className="text-white">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Descatado</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Contacto</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Ubicacion</a>
                  </li>
                </ul>
              </div>
           
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}

          <hr className="mb-4" />

          {/* Section: CTA */}
          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3"> Mas Informacion</span>
              <button type="button" className="btn btn-outline-light btn-rounded" onClick={()=>navigate('/contacto')}>
                Contactanos!
              </button>
            </p>
          </section>
          {/* Section: CTA */}

          <hr className="mb-4" />

          {/* Section: Social media */}
          <section className="mb-4 text-center">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i class="bi bi-facebook"></i></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i class="bi bi-twitter"></i></a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i class="bi bi-google"></i></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i class="bi bi-instagram"></i></a>
            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i class="bi bi-whatsapp"></i></a>
            {/* Github */}
            
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()}
          <a className="text-white"> Auto service Arreglos Ya</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    




    
    </div>
    </div>
  )
}

export default Footer
