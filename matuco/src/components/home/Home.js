import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";

import "./Home.css";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <NavBar />
      <div className={`${theme === "DARK" && "dark-theme"}`}>
        <div>
          <div
            className="d-flex justify-content-center aling-items-center"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/mate2.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%", // Ancho de la ventana
              height: "100vh", // Alto de la ventana
            }}
          >
            <div
              className="text-center"
              style={{
                transform: "translateY(-50%)",
                marginTop: "65vh",
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              <h1 style={{ fontSize: "60px" }}>Bienvenidos!</h1>
              <p></p>
            </div>
          </div>
          <div>
            <h3 className="text-center">Productos destacados</h3>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
