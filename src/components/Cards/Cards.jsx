import React from "react";
import "../Cards/Cards.css";
import Card from "../Card/Card";
import data from "../data";

const Cards = () => {
  return (
    <div className="containerCards">
      {data.map((data) => (
        <Card
          key={data.id}
          titulo={data.titulo}
          descipcion={data.descripcion}
          precio={data.precio}
          imagen={data.imagen}
        />
      ))}
    </div>
  );
};

export default Cards;
