import Carousel from 'react-bootstrap/Carousel';
import Imagenes from './Imagenes';
import '../Estilos/carousel.css'
function CarouselMostrar() {
  return (
    <Carousel className='container-carousel' fade>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen.jpg"} />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen2.webp"} />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen3.webp"} />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen4.jpg"} />
        </div>
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Imagenes url={"/src/Imagenes/imagen5.jpg"} />
        </div>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>  
    </Carousel>
  );
}

export default CarouselMostrar;