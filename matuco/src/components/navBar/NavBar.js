import React from "react";
import { Col, Row } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
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
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
            id="navbarSupportedContent"
          >
            <Row className="navbar-nav mb-2 mb-lg-auto text-bg-dark p-3">
              <Col className="nav-item mx-2 py-2">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </Col>
              <Col className="nav-item mx-2 py-2">
                <a className="nav-link " href="#">
                  Productos
                </a>
              </Col>
              <Col className="nav-item dropdown mx-2 py-2">
                <a className="nav-link dropdown-toggle">Carrito</a>      
              </Col>
              <Col className="d-inline-flex p-2  mx-4 py-1 text-light bg-dark">
                <p className="">Hola -username-!</p>
              </Col>
            </Row>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
