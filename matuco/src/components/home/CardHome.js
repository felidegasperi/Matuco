import React from "react";
import "./CardHome.css";

const CardHome = ({product}) => {
  return (
    <div className="container">
      <div className="box">
        <span className="title">{product.name}</span>
        <div>
          <strong>{product.type}</strong>
          <p>${product.price}</p>
          <button type="button" className="btn btn-outline-warning btn-sm w-100">Ver Producto</button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
