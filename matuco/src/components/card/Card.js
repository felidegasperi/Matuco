import React, { useContext, useState } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const Card = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const { theme } = useContext(ThemeContext);

  const normalStyles = {
    Width: "18rem",
    Height: "18rem",
    transition: "transform 0.3s", // Transición de escala
  };

  const hoverStyles = {
    Width: "18rem",
    Height: "18rem",
    transform: "scale(1.1)", // Escala de 110% en hover
    transition: "transform 0.3s", // Transición de escala
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <div className="container-fluid">
        <div className="card-container d-flex flex-row mt-5 mb-5 justify-content-evenly">
          <div
            className="card"
            style={isHovered1 ? hoverStyles : normalStyles}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <img
              src="../assets/mateCard.png"
              className="card-img-top"
              alt="Mate"
              style={{
                width: "100%",
                height: "250px",
                transition: "transform 0.3s",
              }}
            />
            <div className="card-body">
              <p className="card-text text-center" style={{ color: "black" }}>
                Mates
              </p>
            </div>
          </div>

          <div
            className="card"
            style={isHovered2 ? hoverStyles : normalStyles}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              src="../assets/bombilla.png"
              className="card-img-top"
              alt="Bombilla"
              style={{
                width: "100%",
                height: "250px",
                transition: "transform 0.3s",
              }}
            />
            <div className="card-body">
              <p className="card-text text-center" style={{ color: "black" }}>
                Bombillas
              </p>
            </div>
          </div>

          <div
            className="card"
            style={isHovered3 ? hoverStyles : normalStyles}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <img
              src="../assets/termoCard2.jpg"
              className="card-img-top"
              alt="Termo"
              style={{
                width: "100%",
                height: "250px",
                transition: "transform 0.3s",
              }}
            />
            <div className="card-body">
              <p className="card-text text-center" style={{ color: "black" }}>
                Termos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
