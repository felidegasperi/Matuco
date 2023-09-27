// import React, { useRef, useState } from "react";
import "./Register.css";

import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";

const Register = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  //   const emailRef = useRef(null);
  //   const passwordRef = useRef(null);

  //   const changeEmailHandler = (e) => {
  //     if (emailRef.current.value.length > 0) {
  //       emailRef.current.style.borderColor = "";
  //       emailRef.current.style.outline = "";
  //     }
  //     setEmail(e.target.value);
  //   };

  //   const changePasswordHandler = (e) => {
  //     setPassword(e.target.value);
  //   };
  //   const loginHandler = () => {
  //     if (emailRef.current.value.length === 0) {
  //       emailRef.current.focus();
  //       emailRef.current.style.borderColor = "red";
  //       emailRef.current.style.outline = "none";
  //       setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");

  //       return;
  //     }

  //     if (password.length === 0) {
  //       passwordRef.current.focus();
  //       passwordRef.current.style.borderColor = "red";
  //       passwordRef.current.style.outline = "none";
  //       setError(
  //         "Credenciales incorrectas. Por favor, inténta rellendando con una contraseña "
  //       );
  //       return;
  //     } else if (password.length <= 8) {
  //       passwordRef.current.focus();
  //       passwordRef.current.style.borderColor = "red";
  //       passwordRef.current.style.outline = "none";
  //       setError(
  //         "Credenciales incorrectas. Por favor, inténtalo de nuevo con una contraseña más larga."
  //       );
  //       return;
  //     }
  //     alert(`Su email es: ${email} y su password es: ${password}`);
  //   };
  return (
    <>
      <div>
        <NavBar />
        <div className="container-fluid ml-0">
          <div className="row ml-0">
            <div className="col-md-6 d-flex align-items-center justify-content-center ml-0 ">
              <img
                src="../assets/mates-login.jpg" // Reemplaza con la ruta de tu imagen
                alt="Imagen de inicio de sesión"
                className="img-custom-size"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center p-5 ">
              <div className="container">
                <form className="border rounded-3 p-5 ">
                  <h2>Registrarte</h2>
                  <div className="input-conteiner mt-3 mw-100 mb-4">
                    <input
                      className="form-control form-control-lg"
                      //   value={email}
                      //   onChange={changeEmailHandler}
                      //   ref={emailRef}
                      placeholder="Ingrese su nombre"
                      type="text"
                    />
                  </div>

                  <div className="input-conteiner mt-3 mb-4">
                    <input
                      //   ref={passwordRef}
                      //   value={password}
                      //   onChange={changePasswordHandler}
                      className="form-control form-control-lg"
                      placeholder="Ingrese su email"
                      type="email"
                    />
                  </div>

                  <div className="input-conteiner mt-3 mb-4">
                    <input
                      //   ref={passwordRef}
                      //   value={password}
                      //   onChange={changePasswordHandler}
                      className="form-control form-control-lg"
                      placeholder="Ingrese su contraseña"
                      type="password"
                    />
                  </div>

                  <div className="input-conteiner mt-3 mb-4">
                    <input
                      //   ref={passwordRef}
                      //   value={password}
                      //   onChange={changePasswordHandler}
                      className="form-control form-control-lg"
                      placeholder="Ingrese otra vez su contraseña"
                      type="password"
                    />
                  </div>

                  {/* <div className="text-danger">{error}</div> */}
                  <div>
                    <a href="#" class="link-primary">
                      Ya tienes una cuenta? Ingresa aqui!
                    </a>
                  </div>
                  <div className="vstack mt-3 align-self-center">
                    <button
                      //   onClick={loginHandler}
                      type="button"
                      className="btn btn-outline-secondary "
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
