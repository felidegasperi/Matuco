import React, { useRef, useState } from "react";

import "./Login.css";

import NavBar from "../navBar/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      alert("Email vacío!");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      alert("Password vacío");
      return;
    }
    alert("Ingresaste!");
  };
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-end mb-3 w-auto container mt-5 p-5">
        <div className="col-md-7">
          <img
            src="../" // Reemplaza con la ruta de tu imagen
            alt="Imagen de inicio de sesión"
            className="img-fluid" // Para hacer la imagen responsive
          />
        </div>
        <div className="col-md-5">
          <h2>Iniciar sesion</h2>
          <form className="border rounded-3 p-5 ">
            <div className="input-conteiner mt-3 mw-100 mb-4">
              <input
                className="form-control form-control-lg"
                value={email}
                onChange={changeEmailHandler}
                placeholder="Ingrese su email"
                type="email"
                ref={emailRef}
              />
            </div>
            <div className="input-conteiner mt-3 mb-4">
              <input
                ref={passwordRef}
                value={password}
                onChange={changePasswordHandler}
                className="form-control form-control-lg"
                placeholder="Ingrese su contraseña"
                type="password"
              />
            </div>
            <div>
              <a href="#">Deseas registrarte?Clickea aqui</a>
            </div>
            <div className="vstack mt-3 align-self-center">
              <button
                onClick={loginHandler}
                type="button"
                className="btn btn-outline-success "
              >
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
