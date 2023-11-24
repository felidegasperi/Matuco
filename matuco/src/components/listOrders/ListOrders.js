import React, { useContext } from "react";
import "./ListOrders.css";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { useFetchOrders } from "../../hooks/useFetchOrders";
import { useNavigate } from "react-router-dom";

const ListOrders = () => {
  const { theme } = useContext(AuthenticationContext);

  const navigate = useNavigate()

  const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  const { orders, error } = useFetchOrders(apiUrl);
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const navigateProductsHandler = () =>{
    navigate("/products")
  }



  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      {orders ? (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
          <h2> No hay compras realizadas, por favor vuelva a Productos</h2>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className={`${
                theme === "DARK"
                  ? "btn btn-outline-light btn-sm p-2 m-2"
                  : "btn btn-outline-dark btn-sm p-2 m-2"
              }`}
              type="button"
              onClick={navigateProductsHandler}
            >
              Volver a productos
            </button>
          </div>
        </div>
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default ListOrders;
