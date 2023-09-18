import React, { useState } from "react";

const Card = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const normalStyles = {
    Width: "18rem",
    Height: "18rem",
    backgroundColor: "#838383",
    transition: "transform 0.3s", // Transición de escala
  };

  const hoverStyles = {
    Width: "18rem",
    Height: "18rem",
    transform: "scale(1.1)", // Escala de 110% en hover
    backgroundColor: "#838383",
    transition: "transform 0.3s", // Transición de escala
  };

  return (
    <div className="container-fluid">
      <div className="card-container d-flex flex-row mt-5 mb-5 justify-content-evenly">
        <a className="nav-link" href="#">
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
              <p className="card-text" style={{ color: "black" }}>
                Mates
              </p>
            </div>
          </div>
        </a>

        <a className="nav-link" href="#">
          <div
            className="card"
            style={isHovered2 ? hoverStyles : normalStyles}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              src="../assets/bombillaCard.jpg"
              className="card-img-top"
              alt="Bombilla"
              style={{
                width: "100%",
                height: "250px",
                transition: "transform 0.3s",
              }}
            />
            <div className="card-body">
              <p className="card-text" style={{ color: "black" }}>
                Bombillas
              </p>
            </div>
          </div>
        </a>

        <a className="nav-link" href="#">
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
              <p className="card-text" style={{ color: "black" }}>
                Termos
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
