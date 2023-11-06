import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";

import "./Login.css";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { handleLogin, handleLogout } = useContext(AuthenticationContext);

  useEffect(() => {
    // GET a la API y almacenar los usuarios en el estado
    fetch("http://localhost:8000/users", {
      headers: {
        accept: "aplication/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener los usuarios", error));
  }, []);

  //funcion que va a manejar el envio del formulario
  const handleSumbit = (e) => {
    e.preventDefault();

    // esto verifica si los datos ingresados son iguales a los de algun usuario de la db
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      handleLogin(user);
      console.log(user);
      navigate("/");
    } else {
      setError("Error al iniciar sesion, intente nuevamente.");
    }
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
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
                <div className="text-danger">{error}</div>
                <div>
                  <a href="#" class="link-primary">
                    Deseas registrarte? Clickea aqui
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
