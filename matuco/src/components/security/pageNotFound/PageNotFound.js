import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../../services/themeContext/Theme.context";

import "./PageNotFound.css";

import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";

const PageNotFount = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/");
  };

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
              <button
                className={`${
                  theme === "DARK"
                    ? "btn btn-outline-light btn-sm p-2 m-2"
                    : "btn btn-outline-dark btn-sm p-2 m-2"
                }`}
                type="button"
                onClick={backToHomePageHandler}
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFount;
