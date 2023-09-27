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
      <div className="text-center py-5 m-5">
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
    </>
  );
};

export default PageNotFount;
