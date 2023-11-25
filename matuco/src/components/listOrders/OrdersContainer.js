import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListOrders from "./ListOrders";
import { useFetchOrders } from "../../hooks/useFetchOrders";

const OrdersContainer = () => {
  const { theme } = useContext(AuthenticationContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  const { orders, error } = useFetchOrders(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className={`${theme === "DARK" && "dark"}`}>
        <div>
          <ListOrders orders={orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersContainer;
