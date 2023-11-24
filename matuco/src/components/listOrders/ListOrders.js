import React, { useContext } from "react";
import "./ListOrders.css";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

const ListOrders = () => {
  const { theme } = useContext(AuthenticationContext);
  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>listOrders</div>
  );
};

export default ListOrders;
