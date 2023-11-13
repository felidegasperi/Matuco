import React, { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta
import AddProduct from "../listProducts/AddProduct";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthenticationContext);

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
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
