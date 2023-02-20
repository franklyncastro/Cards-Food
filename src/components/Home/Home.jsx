import React from "react";
import "../Home/Home.css";
import Carrusel from "../Carrusel/Carrusel";

const Home = () => {
  return (
    <div>
      <h1 className="h1 animate__animated animate__fadeInDownBig animate__delay-.8s">
        Cultural Food Restaurant
      </h1>
      <Carrusel />
    </div>
  );
};

export default Home;
