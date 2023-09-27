import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const NavBar = () => {
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

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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

          <Row className="navbar-nav mb-2 mb-lg-auto text-bg-dark p-2">
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
            <Col className="mx-4 text-light bg-dark">
              <p className="">Hola -username-!</p>
            </Col>
            <Col className="d-flex">
              <button
                className="btn btn-primary btn-sm p-2 m-2 "
                type="button"
                onClick={NavigateLoginHandler}
              >
                Iniciar Sesion
              </button>
            </Col>
            <Col className="d-flex">
              <button
                className="btn btn-primary btn-sm p-2 m-2"
                type="button"
                onClick={NavigateRegisterHandler}
              >
                Registrarse
              </button>
            </Col>
          </Row>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
