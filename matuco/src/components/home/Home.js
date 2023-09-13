import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <img
            style={{ width: "100%", height: "1000px" }}
            src={"../assets/mate2.jpg"}
            alt="mate1"
          />
        </div>
        <div>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Home;
