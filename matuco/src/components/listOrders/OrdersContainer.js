import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import ListOrders from "./ListOrders";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import "./ListOrders.css";

const OrdersContainer = () => {
  const { theme } = useContext(AuthenticationContext);
  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className="min-vh-100">
        <ListOrders />
      </div>
      <Footer />
    </div>
  );
};

export default OrdersContainer;
