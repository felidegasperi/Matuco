import React from "react";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

const RegisterForm = ({ users, onSavedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { theme } = useContext(ThemeContext);
  const { handleLogin } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  };

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

  const registerHandler = () => {
    const emailValidation = users.find((user) => user.email === email);

    if (
      emailRef.current.value.length === 0 ||
      validateEmail(emailRef.current.value) === false
    ) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    } else if (usernameRef.current.value.length === 0) {
      usernameRef.current.focus();
      usernameRef.current.style.borderColor = "red";
      usernameRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    } else if (password.length === 0 || confirmPassword.length === 0) {
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
      setError("Las contraseñas no coinciden");
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
    } else if (emailValidation) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      setError("Email ya registrado, intente con otro email.");
    } else {
      const user = {
        username: username,
        type: "client",
        email: email,
        password: password,
        isActive: true,
      };

      onSavedUser(user);
      handleLogin(user);
      navigate("/products");
    }
  };
  return (
    <>
      <form className="border rounded-3 p-5 ">
        <h2>Registrarte</h2>
        <div>
          <div className="input-conteiner mt-3 mw-100 mb-4">
            <input
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
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
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
              placeholder="Ingrese su email"
              type="email"
            />
          </div>

          <div className="input-conteiner mt-3 mb-4">
            <input
              ref={passwordRef}
              value={password}
              onChange={changePasswordHandler}
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
              placeholder="Ingrese su contraseña"
              type="password"
            />
          </div>

          <div className="input-conteiner mt-3 mb-4">
            <input
              ref={confirmPasswordRef}
              value={confirmPassword}
              onChange={changeConfirmPasswordHandler}
              className={`${
                theme === "DARK"
                  ? "form-control form-control-lg bg-dark text-light"
                  : "form-control form-control-lg bg-light text-dark"
              }`}
              placeholder="Ingrese otra vez su contraseña"
              type="password"
            />
          </div>

          <div className="text-danger">{error}</div>
          <div>
            <a onClick={NavigateLoginHandler} href="#" class="link-primary">
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
    </>
  );
};

export default RegisterForm;
