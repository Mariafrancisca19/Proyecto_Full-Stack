import React from 'react'
import '../Estilos/App.css'
import { useNavigate } from 'react-router-dom'


const Footer = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="container-footer">
      <div className="container my-5 footer">
        {/* Footer */}
        <footer className="text-center text-lg-start text-white pie-pagina">
          {/* Grid container */}
          <div className="container py-5">
            {/* Section: Links */}
            <section>
              <div className="row">
                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase font-weight-bold">Auto Service Arreglos Ya</h5>
                  <p className="footer-description">
                    Brindamos soluciones automotrices de confianza y calidad. Tu auto estará siempre en las mejores condiciones, con tecnología avanzada y un servicio personalizado.
                  </p>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase font-weight-bold">Horarios de Atención</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p className="footer-link">Lunes a Viernes: 7:00 AM - 7:00 PM</p>
                    </li>
                    <li>
                      <p className="footer-link">Sábados: 8:00 AM - 6:00 PM</p>
                    </li>
                    <li>
                      <p className="footer-link">Domingos: 8:00 AM - 5:00 PM</p>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase font-weight-bold">Contacto</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p className="footer-link"><i className="bi bi-geo-alt"></i> Calle Ross</p>
                      <iframe style={{borderRadius:'100px', width:'100px', height:'100px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9166.34610492348!2d-84.19598921484888!3d9.9405677296944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1727899059404!5m2!1ses-419!2scr" ></iframe>
                    </li>
                    <li>
                      <a href='https://mail.google.com/mail/u/0/?hl=es#inbox' className="footer-link"><i className="bi bi-envelope"></i> franciscasaborio19@gmail.com</a>
                    </li>
                    <li>
                      <a href='https://whatsapp.com' className="footer-link"><i className="bi bi-telephone"></i> +506 1007 5600</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Section: Links */}

            <hr className="my-4" />

            {/* Section: CTA */}
            <section className="d-flex justify-content-center align-items-center">
              <span className="me-3">¿Necesitas más información?</span>
              <button
                type="button"
                className="btn btn-outline-light btn-rounded contact-button"
                onClick={() => navigate('/contacto')}
              >
                ¡Contáctanos!
              </button>
            </section>

            <hr className="my-4" />

            {/* Section: Social media */}
            <section className="text-center">
              <a className="btn social-icon" href="https://facebook.com" role="button"><i className="bi bi-facebook"></i></a>
              <a className="btn social-icon" href="https://x.com" role="button"><i className="bi bi-twitter"></i></a>
              <a className="btn social-icon" href="https://instagram.com" role="button"><i className="bi bi-instagram"></i></a>
              <a className="btn social-icon" href="https://whatsapp.com" role="button"><i className="bi bi-whatsapp"></i></a>
            </section>
          </div>
          {/* Copyright */}
          <div className="text-center p-3 copyright">
            © {new Date().getFullYear()} 
            <a className="text-white ms-1">Auto Service Arreglos Ya</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer
