import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./PageNotFound.css";

import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";

import { ThemeContext } from "../../../services/themeContext/Theme.context";

const PageNotFount = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/");
  };
  //className={`${
  //theme === "DARK"
  //  ? "text-container bg-dark text-light"
  //  : "text-container bg-ligth text-dark"
  //  }`}

  return (
    <>
      <NavBar />
      <div className="container-notFound">
        <div className={`${theme === "DARK" && "dark-theme"}`}>
          <img
            src="../assets/robot-PageNotFound.png"
            alt="Robot Error 404"
            className="img-custom"
          />
          <div className="text-container">
            <h2>
              Ops... Ha ocurrido un problema!
              <br />
              La página que desea buscar no se encuentra disponible, apriete el
              botón para ser redirigido al home.
            </h2>
            <div className="py-4">
              <Button
                class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill"
                onClick={backToHomePageHandler}
                variant="dark"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFount;
