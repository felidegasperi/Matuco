import React, { useContext, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListUsers from "./ListUsers";

import { ThemeContext } from "../../services/themeContext/Theme.context";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const { theme } = useContext(ThemeContext);

  // validacion para que el mail que ingrese sea correcto
  const validateEmail = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  };

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

  const editUserHandler = (user) => {
    console.log("Estado de selectedUser antes de la solicitud PUT:", user);
    setSelectedUser(user);
  };

  const cancelFormHandler = () => {
    setSelectedUser(null);
  };

  const deleteUserHandler = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este usuario?"
    );

    if (confirmDelete) {
      // Realiza una "baja lógica" mediante una solicitud PUT
      fetch(`http://localhost:8000/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: false }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
          }
          setUsers((PrevUsers) =>
            PrevUsers.map((user) =>
              user.id === id ? { ...user, isActive: false } : user
            )
          );
        })
        .catch((err) => {
          console.Error("Error", err);
          console.log("Error al eliminar el usuario");
        });
    }
  };

  const updateProductHandler = () => {
    if (!selectedUser) return;

    // Realizar validaciones adicionales aquí
    if (!selectedUser.username || selectedUser.username.length <= 3) {
      alert(
        "Ingrese un nombre de usuario válido (mayor o igual a 4 caracteres)"
      );
      return;
    }

    if (!selectedUser.email || validateEmail(selectedUser.email) === false) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    if (!selectedUser.password || selectedUser.password.length <= 7) {
      alert("Ingrese una contraseña válida (mayor o igual a 8 caracteres)");
      return;
    }

    fetch(`http://localhost:8000/users/${selectedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al modificar el usuario");
        }
        return response.json();
      })
      .then((updatedUser) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
      })
      .catch((err) => {
        console.Error("Error", err);
        console.log(
          "Error al modificar el usuario. Por favor, intentelo de nuevo"
        );
      });
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
        <ListUsers
          users={users}
          deleteUserHandler={deleteUserHandler}
          editUserHandler={editUserHandler}
        />
        <div className="row justify-content-center mt-5 p-5">
          {selectedUser && (
            <form className="border rounded-3 col-6 p-5 mt-5">
              <h2>Modificacion de usuario</h2>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el nuevo nombre de usuario:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  type="text"
                  value={selectedUser.username}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    // if (inputValue.length < 0) {
                    //   alert("Ingrese un nombre correcto");
                    // } else {
                    setSelectedUser({
                      ...selectedUser,
                      username: inputValue,
                    });
                  }}
                  // }
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el nuevo email:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  type="text"
                  value={selectedUser.email}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    // if (inputValue.length <= 0) {
                    //   alert("Ingrese un email correcto");
                    // } else {
                    setSelectedUser({
                      ...selectedUser,
                      email: inputValue,
                    });
                  }}
                  // }
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese la nueva contraseña de la cuenta:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  min="0"
                  type="password"
                  value={selectedUser.password}
                  onChange={
                    (e) => {
                      const inputValue = e.target.value;
                      // if (inputValue.length < 0) {
                      //   alert("Ingrese una contraseña correcta");
                      // } else {
                      setSelectedUser({
                        ...selectedUser,
                        password: inputValue,
                      });
                    }
                    // }
                  }
                />
              </div>
              {/* <div className="text-danger">{error}</div> */}
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary col-4"
                  onClick={() => {
                    updateProductHandler(selectedUser);
                  }}
                >
                  Modificar usuario
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
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default UserContainer;
