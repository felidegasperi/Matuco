import React from "react";
import "./CardHome.css";
import { useNavigate } from "react-router-dom";

const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const navigateProductHandler = () => {
    navigate("/products");
  };
  return (
    <div className="container">
      <div className="box">
        <span className="title fs-4">{product.name}</span>
        <div>
          <strong>{product.type}</strong>
          <p>${product.price}</p>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={navigateProductHandler}
            >
              Ver Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
