import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const UserForm = ({ setIsValid, onNewUserHandler, users }) => {
  const [nameUser, setNameUser] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const nameUserRef = useRef(null);
  const typeUserRef = useRef(null);
  const passwordUserRef = useRef(null);
  const emailRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  const changeEmailHandler = (e) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(e.target.value);
    setError("");
  };

  const changeUserNameHandler = (e) => {
    setNameUser(e.target.value);
    setError("");
  };
  const changeTypeUserHandler = (e) => {
    setTypeUser(e.target.value);
    setError("");
  };
  const changePasswordUserHandler = (e) => {
    setPasswordUser(e.target.value);
    setError("");
  };
  const onCancelFormHandler = () => {
    setIsValid(false);
  };
  const onUserHandler = () => {
    const emailValidation = users.find((user) => user.email === email);

    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }

    if (typeUserRef.current.value === "") {
      typeUserRef.current.style.borderColor = "";
      typeUserRef.current.style.outline = "";
      setError("Debe ingresar un tipo de usuario. Intentelo de nuevo");
    }

    if (nameUserRef.current.value.length === 0) {
      nameUserRef.current.focus();
      nameUserRef.current.style.borderColor = "red";
      nameUserRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }

    if (passwordUser.length === 0) {
      passwordUserRef.current.focus();
      passwordUserRef.current.style.borderColor = "red";
      passwordUserRef.current.style.outline = "none";

      setError("Ingresar una contraseña");
    } else if (emailValidation) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      setError("Email ya registrado, intente con otro email.");
    } else {
      const user = {
        username: nameUser,
        type: typeUser,
        email: email,
        password: passwordUser,
        isActive: true,
      };
      onNewUserHandler(user);
      alert("Felicitaciones lo a creado correctamente");
    }
  };
  return (
    <form className="border rounded-3 p-5 ">
      <h2>Ingrese un nuevo Usuario</h2>
      <div>
        <div className="input-conteiner mt-3 mb-4">
          <label>Ingrese el e-mail del nuevo Usuario:</label>
          <input
            className={`${
              theme === "DARK"
                ? "form-control form-control-lg bg-dark text-light"
                : "form-control form-control-lg bg-light text-dark"
            }`}
            type="email"
            ref={emailRef}
            value={email}
            onChange={changeEmailHandler}
          />
        </div>
        <div className="input-conteiner mt-3 mb-4">
          <label>Ingrese el nombre del Usuario:</label>
          <input
            className={`${
              theme === "DARK"
                ? "form-control form-control-lg bg-dark text-light"
                : "form-control form-control-lg bg-light text-dark"
            }`}
            type="text"
            ref={nameUserRef}
            value={nameUser}
            onChange={changeUserNameHandler}
          />
        </div>
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Seleccione el tipo de Usuario:</label>
        <select
          className={`${
            theme === "DARK"
              ? "form-control form-control-lg bg-dark text-light"
              : "form-control form-control-lg bg-light text-dark"
          }`}
          ref={typeUserRef}
          value={typeUser}
          onChange={changeTypeUserHandler}
        >
          <option value="">Seleccione tipo de Usuario</option>
          <option value="superAdmin">Admin</option>
          <option value="owmer">Owner</option>
          <option value="client">Cliente</option>
        </select>
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese la contraseña del nuevo usuario:</label>
        <input
          className={`${
            theme === "DARK"
              ? "form-control form-control-lg bg-dark text-light"
              : "form-control form-control-lg bg-light text-dark"
          }`}
          placeholder=""
          type="password"
          ref={passwordUserRef}
          value={passwordUser}
          onChange={changePasswordUserHandler}
        ></input>
      </div>
      <div className="text-danger">{error}</div>
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-outline-secondary col-4"
          onClick={onUserHandler}
        >
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger col-4"
          onClick={onCancelFormHandler}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default UserForm;
