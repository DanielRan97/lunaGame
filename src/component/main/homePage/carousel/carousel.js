import Aux from "../../../../hoc/Auxiliary/Auxiliary";
import "./carousel.module.css";
import Carousel from 'react-bootstrap/Carousel';

const Carousela = () => {
  return (
    <Aux>
      <Carousel fade nterval={1000} >
      <Carousel.Item>
        <img src="/assets/home-page-carousel-photo/sony4controllers.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>PS4 Controllers</h3>
          <p>Buy 2 for 30% discount</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/home-page-carousel-photo/xbox-sires-s.jpeg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Xbox sires s</h3>
          <p>Best price best power</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/home-page-carousel-photo/ps-vr.jpeg" alt="Third slide" />
        <Carousel.Caption>
          <h3>PS5 VR</h3>
          <p>Play your imagination</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/home-page-carousel-photo/ps1.jpeg" alt="Four slide" />
        <Carousel.Caption>
          <h3>PS1</h3>
          <p>Live your childhood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/home-page-carousel-photo/callofduty.jpg" alt="Five slide" />
        <Carousel.Caption>
          <h3>CALL OF DUTY</h3>
          <p>every week new discounts</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Aux>
  );
};

export default Carousela;
