import React, { useContext } from "react";
import "./ListOrders.css";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { useFetchOrders } from "../../hooks/useFetchOrders";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../../services/apiContext/API.context";
import Loaders from "../ui/loaders/Loaders";

const ListOrders = () => {
  const { theme } = useContext(AuthenticationContext);
  const { isLoading } = useContext(APIContext);
  const navigate = useNavigate();

  const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  const { orders, error } = useFetchOrders(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const navigateProductsHandler = () => {
    navigate("/products");
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      {orders === false ? (
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
        <div className="table-container">
          <table
            className={`${
              theme === "DARK"
                ? "table table-dark table-hover text-center rounded border-top"
                : "table table-light table-hover text-center rounded border-top"
            }`}
          >
            <thead>
              <tr>
                <th>ID de compra</th>
                <th>Email</th>
                <th>Productos</th>
                <th>Precio total</th>
                <th>Opciones</th>
              </tr>
            </thead>
            {isLoading && <Loaders />}
            <tbody>
              {orders.map((order) => (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.email}</td>
                  <td>{order.cart}</td>
                  <td>{order.totalPrice}</td>
                  {/* <td>
                    <button
                      className="btn"
                      // onClick={() => editProductHandler()}
                    >
                      {theme === "DARK" ? (
                        <MdOutlineModeEdit color="white" />
                      ) : (
                        <MdModeEdit />
                      )}
                    </button>
                    <button
                      className="btn"
                      // onClick={() => deleteProductHandler()}
                    >
                      {theme === "DARK" ? (
                        <TiDeleteOutline color="white" />
                      ) : (
                        <TiDelete />
                      )}
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListOrders;
