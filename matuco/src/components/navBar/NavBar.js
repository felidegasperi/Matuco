import React, { useContext } from "react";
import { useNavigate } from "react-router";

import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import { Col, Row } from "react-bootstrap";
import "./NavBar";

import { ThemeContext } from "../../services/themeContext/Theme.context";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const NavigateHomeHandler = () => {
    navigate("/");
  };

  const NavigateLoginHandler = () => {
    navigate("/login");
  };

  return (
    <>
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
              <img
                style={{ width: "100px", height: "90px" }}
                src={"../assets/icon.png"}
              />
            </a>

            {/* boton para el dropdown */}
            {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}

            <Row className="navbar-nav mb-2 mb-lg-auto p-2">
              <Col className="nav-item mx-2 py-2">
                <a className="nav-link" href="#" onClick={NavigateHomeHandler}>
                  Inicio
                </a>
              </Col>
              <Col className="nav-item  py-2">
                <a className="nav-link " href="#">
                  Productos
                </a>
              </Col>
              <Col className="py-2">
                <a className="nav-link" href="#">
                  Carrito
                </a>
              </Col>
              <Col className="mx-4 ">
                <p className="">Hola -username-!</p>
              </Col>
              <Col className="d-flex">
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
              </Col>
              <Col className="d-flex">
                <button
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2"
                      : "btn btn-outline-dark btn-sm p-2 m-2"
                  }`}
                  type="button"
                >
                  Registrarse
                </button>
              </Col>
              <Col className="my-3">
                <ToggleTheme />
              </Col>
            </Row>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
