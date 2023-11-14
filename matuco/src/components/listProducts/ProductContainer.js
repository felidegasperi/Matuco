import React from "react";
import ListProducts from "./ListProducts";

const ProductContainer = () => {
  const deleteProductHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/products/${id}`, { method: "DELETE" }).then((response) => {})
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
