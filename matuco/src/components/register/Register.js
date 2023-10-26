// import React, { useRef, useState } from "react";
import "./Register.css";

import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

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

  const navigate = useNavigate();

  const NavigateLoginHandler = () => {
    navigate("/login");
  };

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeEmailHandler = (e) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };


  //funcion para hacer el post dentro de nuestra base de datos.
  const postNewUserHandler = useCallback(
    (user) => {
      setUsers((prevUsers) => [user, ...prevUsers]);
      const newUserId = users[users.length - 1].id + 1;

      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: newUserId,
          firstName:"",
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
          const newUserArray = [{ ...user, id: newUserId }, ...users];
          setUsers(newUserArray);
        })
        .catch((error) => console.log(error));
    },
    [users]
  );

  const registerHandler = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }

    if (usernameRef.current.value.length === 0) {
      usernameRef.current.focus();
      usernameRef.current.style.borderColor = "red";
      usernameRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      confirmPasswordRef.current.focus();
      confirmPasswordRef.current.style.borderColor = "red";
      confirmPasswordRef.current.style.outline = "none";
      setError("Ingresar una contraseña");
    } else if (password !== confirmPassword) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      confirmPasswordRef.current.focus();
      confirmPasswordRef.current.style.borderColor = "red";
      confirmPasswordRef.current.style.outline = "none";
      setError("Las contraseñas no coinsiden");
    } else if (password.length <= 8 && confirmPassword.length <= 8) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      confirmPasswordRef.current.focus();
      confirmPasswordRef.current.style.borderColor = "red";
      confirmPasswordRef.current.style.outline = "none";
      setError(
        "Credenciales incorrectas. Por favor, inténtalo de nuevo con una contraseña más larga."
      );
    } else {
      setNewUser({
        username: username,
        type: "client",
        email: email,
        password: password,
      });
      postNewUserHandler(newUser);

      navigate("/home");
      //console.log(newUser);
    }
  };

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
                <form className="border rounded-3 p-5 ">
                  <h2>Registrarte</h2>
                  <div>
                    <div className="input-conteiner mt-3 mw-100 mb-4">
                      <input
                        className="form-control form-control-lg"
                        value={username}
                        ref={usernameRef}
                        onChange={changeUsernameHandler}
                        placeholder="Ingrese su nombre"
                        type="text"
                      />
                    </div>

                    <div className="input-conteiner mt-3 mb-4">
                      <input
                        ref={emailRef}
                        value={email}
                        onChange={changeEmailHandler}
                        className="form-control form-control-lg"
                        placeholder="Ingrese su email"
                        type="email"
                      />
                    </div>

                    <div className="input-conteiner mt-3 mb-4">
                      <input
                        ref={passwordRef}
                        value={password}
                        onChange={changePasswordHandler}
                        className="form-control form-control-lg"
                        placeholder="Ingrese su contraseña"
                        type="password"
                      />
                    </div>

                    <div className="input-conteiner mt-3 mb-4">
                      <input
                        ref={confirmPasswordRef}
                        value={confirmPassword}
                        onChange={changeConfirmPasswordHandler}
                        className="form-control form-control-lg"
                        placeholder="Ingrese otra vez su contraseña"
                        type="password"
                      />
                    </div>

                    <div className="text-danger">{error}</div>
                    <div>
                      <a onClick={NavigateLoginHandler} class="link-primary">
                        Ya tienes una cuenta? Ingresa aqui!
                      </a>
                    </div>
                    <div className="vstack mt-3 align-self-center">
                      <button
                        onClick={registerHandler}
                        type="button"
                        className="btn btn-outline-secondary "
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </form>
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
