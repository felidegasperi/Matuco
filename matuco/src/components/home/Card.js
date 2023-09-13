import React from 'react';

const Card = () => {
  return (
    <div className="container-fluid">
      <div className="card-container d-flex flex-row" >
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="../assets/mateCard.png" className="card-img-top" alt="Mate" style={{ width: "100%", height: "250px" }}/>
          <div className="card-body">
            <p className="card-text">Mates</p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="../assets/bombillaCard.jpg" className="card-img-top" alt="Bombilla"  style={{ width: "100%", height: "250px" }}/>
          <div className="card-body">
            <p className="card-text">Bombillas</p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="../assets/termoCard.jpeg" className="card-img-top" alt="Termos"  style={{ width: "100%", height: "250px" }}/>
          <div className="card-body">
            <p className="card-text">Termos</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Card;