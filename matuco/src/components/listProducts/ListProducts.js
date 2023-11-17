import React, { useContext } from "react";

import { TiDeleteOutline, TiDelete } from "react-icons/ti";
import { MdOutlineModeEdit, MdModeEdit } from "react-icons/md";

import "./ListProducts.css";

import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import { APIContext } from "../../services/apiContext/API.context";
import Loaders from "../ui/loaders/Loaders";

const ListProducts = ({
  products,
  deleteProductHandler,
  editProductHandler,
}) => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthenticationContext);
  const { isLoading } = useContext(APIContext);

  const backToHomePageHandler = () => {
    navigate("/home");
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <div>
        {user.type !== "owner" ? (
          <>
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
              <h2 className="mb-4">
                No tiene los permisos para visualizar esta página.
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
          </>
        ) : (
          <div className="table-container">
            <div>
              <AddProduct />
            </div>
            <table
              className={`${
                theme === "DARK"
                  ? "table table-dark table-hover text-center rounded border-top"
                  : "table table-light table-hover text-center rounded border-top"
              }`}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              {isLoading && <Loaders />}
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => editProductHandler(product)}
                      >
                        {theme === "DARK" ? (
                          <MdOutlineModeEdit color="white" />
                        ) : (
                          <MdModeEdit />
                        )}
                      </button>
                      <button
                        className="btn"
                        onClick={() => deleteProductHandler(product.id)}
                      >
                        {theme === "DARK" ? (
                          <TiDeleteOutline color="white" />
                        ) : (
                          <TiDelete />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
