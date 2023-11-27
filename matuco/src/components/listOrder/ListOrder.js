import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import "./ListOrder.css";

import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { APIContext } from "../../services/apiContext/API.context";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import Loaders from "../ui/loaders/Loaders";

const ListOrder = ({ orders, changeStatusHandler, cancelOrderHandler }) => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);
  const { user } = useContext(AuthenticationContext);

  const navigateProductsHandler = () => {
    navigate("/products");
  };
  // Verificar si hay un usuario almacenado en localStorage
  const storedUser = localStorage.getItem("user");
  const storedUserObject = storedUser ? JSON.parse(storedUser) : null;

  // Verificar si el usuario almacenado no coincide con ninguna orden
  const userDoesNotMatchOrders =
    storedUserObject &&
    orders &&
    orders.some((order) => order.email === storedUserObject.email);

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      {!userDoesNotMatchOrders && user.type === "client" ? (
        <div>
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
        </div>
      ) : (
        <div className="table-container min-vh-100">
          <table
            className={`${
              theme === "DARK"
                ? "table table-dark table-hover text-center rounded border-top"
                : "table table-light table-hover text-center rounded border-top"
            }`}
          >
            <thead>
              <tr>
                {user.type !== "client" ? <th>ID de compra</th> : ""}
                {user.type !== "client" ? <th>Email del comprador</th> : ""}
                <th>Productos</th>
                <th>Precio total</th>
                <th>Estado</th>
              </tr>
            </thead>
            {isLoading && <Loaders />}
            <tbody>
              {/* condicional donde va a mostart el cuerpo de la tabla dependiendo 
              que tipo de usuario es ( en este caso, muestra lo siguiente a usuarios que no son clientes ) */}
              {user.type !== "client"
                ? orders.map((order) => (
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
                        <div>
                          {order.status === false ? (
                            <>
                              <button
                                className={`${
                                  theme === "DARK"
                                    ? "btn btn-outline-success btn-sm p-2 m-2"
                                    : "btn btn-outline-success btn-sm p-2 m-2"
                                }`}
                                type="button"
                                onClick={() => changeStatusHandler(order.id)}
                              >
                                Cambiar estado a entregado
                              </button>
                              <button
                                className={`${
                                  theme === "DARK"
                                    ? "btn btn-outline-danger btn-sm p-2 m-2"
                                    : "btn btn-outline-danger btn-sm p-2 m-2"
                                }`}
                                type="button"
                                onClick={() => cancelOrderHandler(order.id)}
                              >
                                Cancelar compra
                              </button>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                : // else donde va a mostrar el cuerpo de la tabla para solamente los clientes
                  orders
                    .filter((order) => order.email === user.email)
                    .map((order) => (
                      <tr key={order.id}>
                        <td>
                          <ul>
                            {order.cart.map((product) => (
                              <li key={product.productId}>
                                {product.productName} -{" "}
                                {product.quantityProduct} unidades - $
                                {product.productPrice} por unidad
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>${order.totalPrice}</td>
                        <td>
                          {order.status === false
                            ? "No entregado"
                            : "Entregado"}
                          <div>
                            {order.status === false ? (
                              <button
                                className={`${
                                  theme === "DARK"
                                    ? "btn btn-outline-danger btn-sm p-2 m-2"
                                    : "btn btn-outline-danger btn-sm p-2 m-2"
                                }`}
                                type="button"
                                onClick={() => cancelOrderHandler(order.id)}
                              >
                                Cancelar compra
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
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

export default ListOrder;
