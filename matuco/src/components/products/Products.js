import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta
import AddProduct from "./AddProduct";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llama a la API aquí
    fetch("http://localhost:8000/products", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="row">
        {data.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </div>
      <AddProduct />
      <Footer />
    </div>
  );
};

export default Products;
