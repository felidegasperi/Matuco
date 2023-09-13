import React from "react";

const Card = () => {
  return (
    <div class="container-fluid">
      <div class="card-container d-flex flex-row mt-5 mb-5 justify-content-evenly">
        <a class="nav-link" href="#">
          <div class="card" style={{ maxWidth: "18rem", MaxHeight: "18rem" }}>
            <img
              src="../assets/mateCard.png"
              class="card-img-top"
              alt="Mate"
              style={{ width: "100%", height: "250px" }}
            />
            <div class="card-body">
              <p class="card-text " style={{ color: "black" }}>
                Mates
              </p>
            </div>
          </div>
        </a>

        <a class="nav-link" href="#">
          <div class="card" style={{ width: "15rem", MaxHeight: "18rem" }}>
            <img
              src="../assets/bombillaCard.jpg"
              class="card-img-top"
              alt="Bombilla"
              style={{ width: "100%", height: "250px" }}
            />
            <div class="card-body">
              <p class="card-text" style={{ color: "black" }}>
                Bombillas
              </p>
            </div>
          </div>
        </a>

        <a class="nav-link" href="#">
          <div class="card" style={{ width: "15rem", MaxHeight: "18rem" }}>
            <img
              src="../assets/termoCard.jpeg"
              class="card-img-top"
              alt="Termos"
              style={{ width: "100%", height: "250px" }}
            />
            <div class="card-body">
              <p class="card-text" style={{ color: "black" }}>
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
