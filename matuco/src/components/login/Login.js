import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { useFetchUsers } from "../../hooks/useFetchUsers";

import "./Login.css";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { handleLogin } = useContext(AuthenticationContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/users";
  const { users, error } = useFetchUsers(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const NavigateRegisterHandler = () => {
    navigate("/register");
  };

  //funcion que va a manejar el envio del formulario
  const handleSumbit = (e) => {
    e.preventDefault();

    // esto verifica si los datos ingresados son iguales a los de algun usuario de la db
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    const userValid = users.find((user) => user.isActive === true);

    if (user && userValid) {
      alert("Usuario ingresado correctamente");
      handleLogin(user);
      console.log(user);
      navigate("/products");
    } else {
      setErrors("Error al iniciar sesion, intente nuevamente.");
    }
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className="container-fluid ml-0 min-vh-100">
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
                <h2>Iniciar sesión</h2>
                <div className="input-conteiner mt-3 mw-100 mb-4">
                  <input
                    className={`${
                      theme === "DARK"
                        ? "form-control form-control-lg bg-dark text-light"
                        : "form-control form-control-lg bg-light text-dark"
                    }`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese su email"
                  />
                </div>

                <div className="input-conteiner mt-3 mb-4">
                  <input
                    className={`${
                      theme === "DARK"
                        ? "form-control form-control-lg bg-dark text-light"
                        : "form-control form-control-lg bg-light text-dark"
                    }`}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <div className="text-danger">{errors}</div>
                <div>
                  <a
                    href="#"
                    class="link-primary"
                    onClick={NavigateRegisterHandler}
                  >
                    Deseas registrarte? Clickea aqui!
                  </a>
                </div>
                <div className="vstack mt-3 align-self-center">
                  <button
                    onClick={handleSumbit}
                    type="button"
                    className="btn btn-outline-secondary "
                  >
                    Iniciar Sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
