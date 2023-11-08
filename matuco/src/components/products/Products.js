import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta
import AddProduct from "./AddProduct";

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

  const postNewProductHandler = useCallback(
    (product) => {
     

      const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
      console.log("User data in postNewUserHandler: ", product);
      fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: newProductId,
          name: product.name,
          type: product.type,
          price: product.price,
        }),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("The response had some errors");
          }
        })
        .then(() => {
          console.log("product en then", product);
          const newProductArray = [
            { ...product, id: newProductId },
            ...products,
          ];
          setProducts(newProductArray);
        })
        .catch((error) => console.log(error));
    },
    [products]
  );

  return (
    <div>
      <NavBar />
      <div className="row p-5">
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </div>
      <div className="border-top">
        <AddProduct onPostNewProductHandler={postNewProductHandler} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
