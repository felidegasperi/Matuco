import React, { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const FormSettings = ({ setViewForm }) => {
  const { theme } = useContext(ThemeContext);

  const closeFormHandler = () => {
    setViewForm(false);
  };

  return (
    <>
      <form className="border rounded-3 mt-5 p-5 ">
        <div>
          <div className="input-conteiner mt-3 mw-100 mb-4">
            <input
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
            />
          </div>

          <div className="input-conteiner mt-3 mb-4">
            <input
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
            />
          </div>

          <div className="input-conteiner mt-3 mb-4">
            <input
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
            />
          </div>
          <div className="vstack mt-3 align-self-center">
            <button type="button" className="btn btn-outline-secondary ">
              Modificar datos
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={closeFormHandler}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSettings;
