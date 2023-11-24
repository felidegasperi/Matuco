import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListOrders from "./ListOrders";

const OrdersContainer = () => {
  const { theme } = useContext(AuthenticationContext);
  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className="min-vh-100">
        <div>
          <ListOrders />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersContainer;
