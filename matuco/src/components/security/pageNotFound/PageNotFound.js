import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import NavBar from "../../navBar/NavBar";

const PageNotFount = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/");
  };
  return (
    <>
      <NavBar />
      <div className="text-center">
        <h2>
          ops a ocurrido un problema!<br />Pagina que quiere buscar no se
          encuentra disponible toque en el boton para reedirigirse.
        </h2>
        <div>
        <Button  class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill" onClick={backToHomePageHandler} variant="dark">
          Volver al inicio
        </Button>
        </div>
      </div>
    </>
  );
};

export default PageNotFount;
