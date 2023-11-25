import React, { useContext } from "react";

import "./ListOrders.css";

import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
// import { useFetchOrders } from "../../hooks/useFetchOrders";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../../services/apiContext/API.context";
import Loaders from "../ui/loaders/Loaders";

const ListOrders = ({ orders }) => {
  const navigate = useNavigate();

  const { theme } = useContext(AuthenticationContext);
  const { isLoading } = useContext(APIContext);

  // const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  // const { orders, error } = useFetchOrders(apiUrl);

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  const navigateProductsHandler = () => {
    navigate("/products");
  };

  const changeStatusHandler = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cambiar el estado del pedido?"
    );

    //todavia esta condicion no hace nada, no apretar
    // if (confirmDelete) {
    //   //realiza el cambio de estado, de no entregado a entregado y viseversa
    //   fetch(`https://matuco-fake-api.onrender.com/orders/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     //falta condicional para ponerlo en true si esta en false y viseversa
    //     body: JSON.stringify({ status: true }),
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Error al eliminar el usuario");
    //       }
    //        setUsers((PrevUsers) =>
    //          PrevUsers.map((user) =>
    //            user.id === id ? { ...user, isActive: false } : user
    //          )
    //        );
    //       alert("Se ha elimiado el usuario con exito!");
    //     })
    //     .catch((err) => {
    //       console.Error("Error", err);
    //       console.log("Error al eliminar el usuario");
    //     });
    // }
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
                <th>Email comprador</th>
                <th>Productos</th>
                <th>Precio total</th>
                <th>Estado</th>
              </tr>
            </thead>
            {isLoading && <Loaders />}
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.email}</td>
                  <td>
                    <ul>
                      {order.cart.map((product) => (
                        <li key={product.productId}>
                          {product.productName} - {product.quantityProduct}{" "}
                          unidades - ${product.productPrice} por unidad
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.status === false ? "No entregado" : "Entregado"}
                    <button onClick={() => changeStatusHandler()}>
                      Cambiar estado a{" "}
                      {order.status === false ? "Entregado" : "No entregado"}
                    </button>
                  </td>
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
