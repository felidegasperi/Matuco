import React, { useContext } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListOrders from "./ListOrders";
import { useFetchOrders } from "../../hooks/useFetchOrders";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const OrdersContainer = () => {
  const { theme } = useContext(ThemeContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  const { orders, setOrders, error } = useFetchOrders(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const changeStatusHandler = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cambiar el estado del pedido?"
    );

    //valida que hayamos dado click en si, para seguir
    if (confirmDelete) {
      //realiza el cambio de estado, de no entregado a entregado y viseversa
      fetch(`https://matuco-fake-api.onrender.com/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        //falta condicional para ponerlo en true si esta en false y viseversa
        body: JSON.stringify({ status: true }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
          }
          setOrders((PrevOrders) =>
            PrevOrders.map((order) =>
              order.id === id ? { ...order, status: true } : order
            )
          );
          alert("Se ha modicado correctamente el estado del pedido!");
        })
        .catch((err) => {
          console.Error("Error", err);
          console.log("Error al cambiar el estado del pedido");
        });
    }
  };

  const cancelOrderHandler = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cancelar el pedido?"
    );

    //valida que hayamos dado click en si, para seguir
    if (confirmDelete) {
    }
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className={`${theme === "DARK" && "dark"}`}>
        <div>
          <ListOrders
            orders={orders}
            changeStatusHandler={changeStatusHandler}
            cancelOrderHandler={cancelOrderHandler}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersContainer;
