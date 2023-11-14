import React, { useEffect, useState } from "react";
import ListProducts from "./ListProducts";

const ProductContainer = () => {
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

  const deleteProductHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Producto eliminado con exito");
          const newListProducts = products.filter(
            (product) => product.id !== id
          );
          setProducts(newListProducts);
        } else {
          throw new Error("No se pudo eliminar el producto.");
        }
      })
      .catch((err) => console.error(err));
  };
  const editProductHandler = () => {};

  return (
    <div>
      <ListProducts
        deleteProductHandler={deleteProductHandler}
        editProductHandler={editProductHandler}
      />
    </div>
  );
};

export default ProductContainer;
