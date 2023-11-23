import React from "react";
import "./CardHome.css";

const CardHome = ({ product }) => {
  return (
    <div className="container">
      <div className="box">
        <span className="title">{product.name}</span>
        <div>
          <strong>{product.type}</strong>
          <p>${product.price}</p>
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-warning">
            Ver Producto
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
