import React, { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useFetchOrders } from "../../hooks/useFetchOrders";
import ListOrder from "./ListOrder";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const OrderContainer = () => {
  const { theme } = useContext(ThemeContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/orders";
  const { orders, error } = useFetchOrders(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
        <ListOrder orders={orders} />
      </div>
      <Footer />
    </div>
  );
};

export default OrderContainer;
