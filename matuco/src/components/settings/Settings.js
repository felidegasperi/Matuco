import React, { useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

import { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import FormSettings from "./FormSettings";

const Settings = () => {
  const [viewForm, setViewForm] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);

  const onModifyHandler = () => {
    setViewForm(true);
  };
  return (
    <>
      <NavBar />
      <div className={`${theme === "DARK" && "dark-theme"}`}>
        <div>
          <div>
            {user && (
              <>
                <h2>Nombre de usuario: {user.username}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Contraseña: **********</h2>
              </>
            )}
            <button onClick={onModifyHandler}>modificar datos</button>
            <button>Borrar cuenta</button>
          </div>
          {viewForm && <FormSettings setViewForm={setViewForm} />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Settings;
