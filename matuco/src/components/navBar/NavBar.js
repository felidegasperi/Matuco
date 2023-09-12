import React from "react";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              style={{ width: "80px", height: "80px" }}
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
            class="d-flex justify-content-center bd-highlight"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-auto">
              <li class="nav-item m">
                <a class="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Productos
                </a>
              </li>
              <li
                class="nav-item dropdown"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carrito
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
