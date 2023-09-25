import React from "react";

import "./Login.css"

import NavBar from "../navBar/NavBar";

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center mb-3 w-auto  p-5">
        <form >
          <div className="input-conteiner mt-3 mw-100" >
            <input  className="form-control form-control-lg"placeholder="Ingrese su email" type="text" />
          </div>
          <div className="input-conteiner mt-3">
            <input  className="form-control form-control-lg" placeholder="Ingrese contraseña" type="password" />
          </div>
          <div className="vstack mt-3 align-self-center">
            <button type="button" className="btn btn-outline-success ">
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
