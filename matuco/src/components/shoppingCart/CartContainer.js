import React, { useContext } from "react";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

import { useNavigate } from "react-router";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { CartContext } from "../../services/shoppingCartContext/ShoppingCart.context";

const CartContainer = () => {
  const { theme } = useContext(ThemeContext);
  const [cart, setCart] = useContext(CartContext);

  const navigate = useNavigate();

  // funcion que retorna el valor del acumulador y lo suma a la cantidad que tiene cada producto
  // el .quantity es para acceder a la cant de cada producto
  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const totalPrice = cart.reduce((acum, current) => {
    return acum + current.quantity * current.price;
  }, 0);

  const checkoutHandler = () => {
    const confirmPurchase = window.confirm(
      "¿Esta seguro que desea finalizar la compra?"
    );

    if (confirmPurchase) {
      setCart([]);
      alert("Compra finalizada. Gracias!");
    }
  };

  const emptyCartHandler = () => {
    const confirmEmptyCart = window.confirm(
      "¿Esta seguro que desea limpiar el carrito?"
    );

    if (confirmEmptyCart) {
      setCart([]);
      alert("Carrito eliminado");
    }
  };

  const navigateProductsHandler = () => {
    navigate("/products");
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
        {quantity === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h2> No hay elementos guardados en el carrito</h2>
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
          <div className="table-container min-vh-100 pt-5">
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
            <div>
              <table
                className={`${
                  theme === "DARK"
                    ? "table table-dark table-hover text-center rounded border-top"
                    : "table table-light table-hover text-center rounded border-top"
                }`}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Tipo</th>
                    <th>Precio por unidad</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 className="d-flex align-items-center justify-content-center">
                Precio total a pagar: ${totalPrice}
              </h4>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={checkoutHandler}
                >
                  Realizar compra
                </button>
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={emptyCartHandler}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartContainer;
