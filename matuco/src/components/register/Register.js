/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useContext } from "react";

import "./Register.css";

import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import RegisterForm from "./RegisterForm";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const Register = () => {
  const { theme } = useContext(ThemeContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/users";
  const { users, error, setUsers } = useFetchUsers(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  //funcion para hacer el post dentrode la db
  const postNewUserHandler = useCallback(
    (user) => {
      const newUserId = users[users.length - 1].id + 1;
      console.log("User data in postNewUserHandler: ", user);
      fetch("https://matuco-fake-api.onrender.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: newUserId,
          username: user.username,
          email: user.email,
          password: user.password,
          type: "client",
          isActive: true,
        }),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("The response had some errors");
          }
        })
        .then(() => {
          console.log("user en then", user);
          const newUserArray = [{ ...user, id: newUserId }, ...users];
          setUsers(newUserArray);
        })
        .catch((error) => console.log(error));
    },
    [setUsers, users]
  );

  return (
    <>
      <div className={`${theme === "DARK" && "dark-theme"}`}>
        <NavBar />
        <div className="container-fluid ml-0">
          <div className="row ml-0">
            <div className="col-md-6 d-flex align-items-center justify-content-center ml-0 ">
              <img
                src="../assets/mates-login.jpg" // Reemplaza con la ruta de tu imagen
                alt="Imagen de inicio de sesión"
                className="img-custom-size"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center p-5 ">
              <div className="container">
                <RegisterForm users={users} onSavedUser={postNewUserHandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
