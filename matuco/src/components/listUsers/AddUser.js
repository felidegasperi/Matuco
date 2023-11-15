import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    // GET a la API y almacenar los usuarios en el estado
    fetch("http://localhost:8000/users", {
      headers: {
        accept: "aplication/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener los usuarios", error));
  }, []);

  const onValidHandler = () => {
    setIsValid(true);
    navigate("/listUsers");
  };

  return (
    <div className="row justify-content-center mt-5 p-5">
      <div className=" col-1 d-flex align-items-center">
        {isValid === false && (
          <button
            className={`${
              theme === "DARK"
                ? "btn btn-outline-light d-flex justify-content-center"
                : "btn btn-outline-dark d-flex justify-content-center"
            }`}
            onClick={onValidHandler}
          >
            Agregar Producto
          </button>
        )}
      </div>
      <div className="col-6"></div>
    </div>
  );
};

export default AddUser;
