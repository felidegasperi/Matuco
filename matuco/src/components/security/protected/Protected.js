import React from "react";
import { useContext } from "react"; 
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  } else return children;
};

export default Protected;
