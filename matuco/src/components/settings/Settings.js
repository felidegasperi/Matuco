import React, { useState, useContext } from "react";

import FormSettings from "./FormSettings";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

import { Col } from "react-bootstrap";
import "./Settings.css";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";



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
          <div class="row align-items-start">
            <Col>
              <div className="content-container border ml-3">
                {user && (
                  <>
                    <h2>Nombre de usuario: {user.username}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>Contraseña: **********</h2>
                  </>
                )}
                
                <button
                  onClick={onModifyHandler}
                  className=" mr-3 btn btn-outline-secondary "
                >
                  Modificar datos
                </button>
                <button className="ml-3 btn btn-outline-danger ">
                  Borrar cuenta
                </button>
              </div>
            </Col>
            <Col>{viewForm && <FormSettings setViewForm={setViewForm} />}</Col>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Settings;
