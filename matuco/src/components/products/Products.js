import React, { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llama a la API aquí
    fetch("http://localhost:8000/products", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="row p-5">
        {/* implementar condicional para cuando no se pueden obtener los productos */}
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
