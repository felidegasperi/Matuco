import React , { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../../../services/authenticationContext/Authentication.context";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/" replace />;
  } else return children;
};

export default Protected;