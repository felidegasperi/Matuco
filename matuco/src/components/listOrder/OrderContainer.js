import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeContext } from "../../services/themeContext/Theme.context";

import { useFetchOrders } from "../../hooks/useFetchOrders";

import ListOrder from "./ListOrder";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const OrderContainer = () => {
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
          toast.success("Se ha modicado correctamente el estado del pedido!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.Error("Error", err);
          toast.error("Error al cambiar el estado del pedido", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("Error al cambiar el estado del pedido");
        });
    }
  };

  const cancelOrderHandler = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cancelar el pedido?"
    );

    //valida que hayamos dado click en si, para seguir
    if (confirmDelete) {
      fetch(`https://matuco-fake-api.onrender.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setOrders((PrevOrders) =>
              PrevOrders.filter((order) => order.id !== id)
            );
            toast.warn("Pedido eliminado con exito", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            throw new Error("No se pudo eliminar el pedido.");
          }
        })
        .catch((err) => {
          toast.error("Error al eliminar la compra", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err);
        });
    }
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <ToastContainer />
      <div className={`${theme === "DARK" && "dark"}`}>
        <div>
          <ListOrder
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

export default OrderContainer;
