import React, { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta
import { ThemeContext } from "../../services/themeContext/Theme.context";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { theme } = useContext(ThemeContext);

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
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div className="row p-5">
        {/* implementar condicional para cuando no se pueden obtener los productos */}
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
