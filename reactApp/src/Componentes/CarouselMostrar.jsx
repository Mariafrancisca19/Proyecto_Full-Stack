import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const CarouselMostrar = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <CarouselMostrar text="First slide" />
        <Carousel.Caption>
          <Link to='/announcements'>
            <img src={"reactApp/src/Imagenes/automotive-service-logo.webp"}/>
          </Link>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselMostrar text="Second slide" />
        <Carousel.Caption>
          <Link to='/announcements'>
            <img src={"reactApp/src/Imagenes/automotriz-logo.png"}/>
          </Link>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselMostrar text="Third slide" />
        <Carousel.Caption>
          <Link to='/announcements'>
            <img src={"reactApp/src/Imagenes/logo.webp"}/>
          </Link>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselMostrar
