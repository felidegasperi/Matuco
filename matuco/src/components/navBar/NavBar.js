import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

import ToggleTheme from "../ui/toggleTheme/ToggleTheme";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  const { handleLogout, user } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const NavigateHomeHandler = () => {
    navigate("/");
  };

  const NavigateLoginHandler = () => {
    navigate("/login");
  };

  const NavigateRegisterHandler = () => {
    navigate("/register");
  };

  const NavigateSettingsHandler = () => {
    navigate("/settings");
  };
  
  const NavigateProductHandler = () => {
    navigate("/products");
  };

  const onLogoutHandler = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <nav
        className={`${
          theme === "DARK"
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-light bg-light border-bottom"
        }`}
      >
        <div class="container fw-bold fs-5">
          <a class="navbar-brand" href="#" onClick={NavigateHomeHandler}>
            {theme === "DARK" ? (
              <>
                <img
                  style={{ width: "100px", height: "90px" }}
                  src={"../assets/icon.png"}
                />
              </>
            ) : (
              <>
                <img
                  style={{ width: "100px", height: "90px" }}
                  src={"../assets/icon2.png"}
                />
              </>
            )}
          </a>

          <Row className="navbar-nav mb-2 mb-lg-auto p-2">
            <Col className="nav-item mx-2 py-2">
              <a className="nav-link" href="#" onClick={NavigateHomeHandler}>
                Inicio
              </a>
            </Col>
            <Col className="nav-item  py-2">
              <a className="nav-link " onClick={NavigateProductHandler} href="#">
                Productos
              </a>
            </Col>
            <Col className="py-2">
              <a className="nav-link" href="#">
                Carrito
              </a>
            </Col>
            <Col className="mx-2 ">
              {user && <p className="">Hola {user.username} !</p>}
            </Col>
            <Col className="d-flex">
              {user !== null ? (
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={NavigateSettingsHandler}
                >
                  Settings
                </button>
              ) : (
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={NavigateLoginHandler}
                >
                  Iniciar Sesion
                </button>
              )}
            </Col>
            <Col className="d-flex">
              {user !== null ? (
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-danger btn-sm p-2 m-2"
                      : "btn btn-outline-danger btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={onLogoutHandler}
                >
                  Cerrar Sesion
                </button>
              ) : (
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                  onClick={NavigateRegisterHandler}
                >
                  Registrarse
                </button>
              )}
            </Col>
            <Col className="my-3">
              <ToggleTheme />
            </Col>
          </Row>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
