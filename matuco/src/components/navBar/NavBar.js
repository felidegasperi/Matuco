import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import { CartContext } from "../../services/shoppingCartContext/ShoppingCart.context";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  const { handleLogout, user } = useContext(AuthenticationContext);

  const [cart, setCart] = useContext(CartContext);

  const navigate = useNavigate();

  // funcion que retorna el valor del acumulador y lo suma a la cantidad que tiene cada producto
  // el .quantity es para acceder a la cant de cada producto
  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

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

  const NavigateListProductHandler = () => {
    navigate("/listproducts");
  };

  const NavigateListUserHandler = () => {
    navigate("/listUsers");
  };

  const NavigateCartHandler = () => {
    navigate("/cart");
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
          <a class="navbar-brand" onClick={NavigateHomeHandler}>
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
              <a className="nav-link" onClick={NavigateHomeHandler}>
                Inicio
              </a>
            </Col>
            <Col className="nav-item  py-2">
              <a className="nav-link " onClick={NavigateProductHandler}>
                Productos
              </a>
            </Col>
            <Col className="py-2">
              <a className="nav-link" onClick={NavigateCartHandler}>
                Carrito {user && <span className="cart-count">{quantity}</span>}
              </a>
            </Col>
            <Col className="mx-2 ">
              {user && <p className="">Hola {user.username}!</p>}
            </Col>
            <Col className="d-flex">
              {user !== null ? (
                <>
                  {user.type === "owner" ? (
                    <button
                      className={`${
                        theme === "DARK"
                          ? "btn btn-outline-light btn-sm p-2 m-2"
                          : "btn btn-outline-dark btn-sm p-2 m-2"
                      }`}
                      type="button"
                      onClick={NavigateListProductHandler}
                    >
                      Lista de productos
                    </button>
                  ) : (
                    <>
                      {user.type === "superAdmin" ? (
                        <button
                          className={`${
                            theme === "DARK"
                              ? "btn btn-outline-light btn-sm p-2 m-2"
                              : "btn btn-outline-dark btn-sm p-2 m-2"
                          }`}
                          type="button"
                          onClick={NavigateListUserHandler}
                        >
                          Lista de Users
                        </button>
                      ) : (
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
                      )}
                    </>
                  )}
                </>
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
