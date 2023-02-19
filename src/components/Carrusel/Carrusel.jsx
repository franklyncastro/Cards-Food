import React from "react";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../assets/img/food-1.jpg'
import img2 from '../../assets/img/food-1.jpg'
import img3 from '../../assets/img/food-1.jpg'



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
    <div>
      return (
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Imagen 1" />
        </div>
        <div>
          <img src={img2} alt="Imagen 2" />
        </div>
        <div>
          <img src={img3} alt="Imagen 3" />
        </div>
      </Slider>
      );
    </div>
  );
};

export default Carrusel;
