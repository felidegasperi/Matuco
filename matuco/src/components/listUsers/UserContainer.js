import React, { useContext, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListUsers from "./ListUsers";

import { ThemeContext } from "../../services/themeContext/Theme.context";

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  const { theme } = useContext(ThemeContext);

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

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
        <ListUsers
          users={users}
        //   deleteProductHandler={deleteProductHandler}
        //   editProductHandler={editProductHandler}
        />
        {/* <div className="row justify-content-center mt-5 p-5">
          {selectedProduct && (
            <form className="border rounded-3 col-6 p-5 mt-5">
              <h2>Ingreso de un producto</h2>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el nombre del producto:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  placeholder={`${selectedProduct.name}`}
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue.length <= 0) {
                      alert("Ingrese un nombre correcto");
                    } else {
                      setSelectedProduct({
                        ...selectedProduct,
                        name: inputValue,
                      });
                    }
                  }}
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Tipo de producto a modificar:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  disabled
                  placeholder={`${selectedProduct.type}`}
                  value={selectedProduct.type}
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el precio del producto:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  min="0"
                  placeholder={`${selectedProduct.price}`}
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value);
                    if (inputValue <= 0) {
                      alert("Ingrese un precio correcto");
                    } else {
                      setSelectedProduct({
                        ...selectedProduct,
                        price: inputValue,
                      });
                    }
                  }}
                />
              </div> */}
        {/* <div className="text-danger">{error}</div> */}
        {/* <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary col-4"
                  onClick={() => {
                    updateProductHandler(selectedProduct);
                  }}
                >
                  Modificar producto
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger col-4"
                  onClick={cancelFormHandler}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default UserContainer;
