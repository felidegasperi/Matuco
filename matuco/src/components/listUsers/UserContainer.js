import React, { useContext, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ListUsers from "./ListUsers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const UserContainer = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [errors, setErrors] = useState("");

  const { theme } = useContext(ThemeContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/users";
  const { users, setUsers, error } = useFetchUsers(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // validacion para que el mail que ingrese sea correcto
  const validateEmail = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  };

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
      fetch(`https://matuco-fake-api.onrender.com/users/${id}`, {
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
          toast.success("Se ha elimiado el usuario con exito!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.Error("Error", err);
          toast.warn("Error al eliminar el usuario", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("Error al eliminar el usuario");
        });
    }
  };

  const updateProductHandler = () => {
    if (!selectedUser) return;

    // Realizar validaciones adicionales aquí
    if (!selectedUser.username || selectedUser.username.length <= 3) {
      toast.error(
        "Ingrese un nombre de usuario válido (mayor o igual a 4 caracteres)",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      setErrors(
        "Ingrese un nombre de usuario válido (mayor o igual a 4 caracteres)"
      );
    }

    if (!selectedUser.email || validateEmail(selectedUser.email) === false) {
      toast.error("Ingrese un correo electrónico válido", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setErrors("Ingrese un correo electrónico válido");
    }

    if (!selectedUser.password || selectedUser.password.length <= 7) {
      toast.error(
        "Ingrese una contraseña válida (mayor o igual a 8 caracteres)",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      setErrors("Ingrese una contraseña válida (mayor o igual a 8 caracteres)");
    }

    fetch(`https://matuco-fake-api.onrender.com/users/${selectedUser.id}`, {
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
        toast.success("Se ha modificado el usuario con exito!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setSelectedUser(null);
      })
      .catch((err) => {
        console.Error("Error", err);
        toast.warn(
          "Error al modificar el usuario. Por favor, intentelo de nuevo",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        console.log(
          "Error al modificar el usuario. Por favor, intentelo de nuevo"
        );
      });
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className="min-vh-100">
        <ToastContainer />
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
                    setSelectedUser({
                      ...selectedUser,
                      username: inputValue,
                    });
                  }}
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
                    setSelectedUser({
                      ...selectedUser,
                      email: inputValue,
                    });
                  }}
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
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    setSelectedUser({
                      ...selectedUser,
                      password: inputValue,
                    });
                  }}
                />
              </div>
              <p className="text-danger">{errors}</p>
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
      <Footer />
    </div>
  );
};

export default UserContainer;
