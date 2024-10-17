import Carousel from 'react-bootstrap/Carousel';
import Imagenes from './Imagenes';
import '../Estilos/carousel.css'
import { useNavigate } from 'react-router-dom';


function CarouselMostrar() {
  const navigate = useNavigate()
  return (
    <Carousel className='container-carousel' fade>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen.jpg"} />
        </div>
        <Carousel.Caption>
          <h3>Nuestros Servicios</h3>
          <p>Contamos con múltiples servicios según la necesidad de su vehículo</p>
          <button onClick={()=>navigate("/destacado")}>
             VER MAS
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen2.webp"} />
        </div>
        <Carousel.Caption>
          <h3>Contamos con años de servicio</h3>
          <p>Nos permite decir que somos su mejor garantía </p>
          <button onClick={()=>navigate("/sobrenosotros")}>
          VER MAS
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen3.webp"} />
        </div>
        <Carousel.Caption>
          <h3>Solicitar Mantenimiento</h3>
          <p> Saca tu cita con nosotros</p>
          <button onClick={()=>navigate("/servicio")}>
          Solicitar Mantenimiento
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen4.jpg"} />
        </div>
        <Carousel.Caption>
        <h3>Conoce nuestros Destacados</h3>
        <p>Descubre lo mejor que tenemos para ofrecer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen5.jpg"} />
        </div>
        <Carousel.Caption>
        <h3>Calidad en cada detalle</h3>
        <p>Nos esforzamos por ofrecer el mejor servicio.</p>
        </Carousel.Caption>
      </Carousel.Item>  
    </Carousel>
  );
}

export default CarouselMostrar;