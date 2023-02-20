import React from "react";
import '../Carrusel/Carrusel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../assets/img/food-1.jpg'
import img2 from '../../assets/img/food-2.jpg'
import img3 from '../../assets/img/food-3.jpg'



const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className="containerCarrusel animate__animated animate__fadeIn animate__delay-1s">
      <Slider {...settings} className="Slider">
        <div className="ContainerImg">
          <img src={img1} alt="Imagen 1" className="SliderImg"/>
        </div>
        <div className="ContainerImg">
          <img src={img2} alt="Imagen 2" className="SliderImg"/>
        </div>
        <div className="ContainerImg">
          <img src={img3} alt="Imagen 3" className="SliderImg"/>
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
