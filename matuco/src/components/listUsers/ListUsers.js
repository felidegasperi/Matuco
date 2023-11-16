import React, { useContext } from "react";

import "./ListUsers.css";
import AddUser from "./AddUser";

import { TiDeleteOutline, TiDelete } from "react-icons/ti";
import { MdOutlineModeEdit, MdModeEdit } from "react-icons/md";

import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useNavigate } from "react-router-dom";

const ListUsers = ({ users, deleteUserHandler, editUserHandler }) => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthenticationContext);

  const backToHomePageHandler = () => {
    navigate("/home");
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <div className="table-container">
        {user.type !== "superAdmin" ? (
          <>
            <h2> No tiene los permisos para vizualizar esta pagina.</h2>
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
          </>
        ) : (
          <div className="table-container">
            <div>
              <AddUser />
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
                  <th>Username</th>
                  <th>Email</th>
                  <th>Contraseña</th>
                  <th>Tipo</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => user.isActive)
                  .map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.type}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => editUserHandler(user)}
                        >
                          {theme === "DARK" ? (
                            <MdOutlineModeEdit color="white" />
                          ) : (
                            <MdModeEdit />
                          )}
                        </button>
                        <button
                          className="btn"
                          onClick={() => deleteUserHandler(user.id)}
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

export default ListUsers;
