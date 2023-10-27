// import React, { useRef, useState } from "react";
import "./Register.css";

import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import { useCallback, useEffect, useState } from "react";
import NewRegister from "./NewRegister";

const Register = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //GET a la API y almacenar los usuarios en el state
    fetch("http://localhost:8000/users", {
      headers: {
        accept: "aplication/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("error al obtener los users", error));
  }, []);

  //funcion para hacer el post dentrode la db
  const postNewUserHandler = useCallback(
    (user) => {
      //setUsers((prevUsers) => [user, ...prevUsers]);

      const newUserId = users[users.length - 1].id + 1;
      console.log("User data in postNewUserHandler: ", user);
      fetch("http://localhost:8000/users", {
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
    [users]
  );

  return (
    <>
      <div>
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
                <NewRegister onSavedUser={postNewUserHandler} />
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
