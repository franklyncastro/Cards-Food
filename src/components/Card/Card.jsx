import React from "react";
import "../Card/Card.css";


const Card = ({titulo, descipcion, precio, imagen}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="img">
          <img src={imagen} alt="img no found" className="image" />
        </div>
        <div>
          <h4 className="title">{titulo}</h4>
        </div>
        <div className="parrafoContaienr">
          <p className="parrafo">
            {descipcion}
          </p>
        </div>
        <div className="priceContainer">
          <h2 className="price">RD${precio}</h2>
        </div>
        <div className="btnContainer">
          <button className="btn"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
