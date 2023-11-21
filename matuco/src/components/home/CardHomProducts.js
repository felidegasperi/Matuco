import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import CardHome from "./CardHome";

const CardHomProducts = () => {
  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className=" d-flex m-5">
      {products
        .filter((product) => product.id <= 4)
        .map((product) => (
          <div className="col">
            <CardHome  key={product.id} product={product} />
          </div>
        ))}
    </div>
  );
};

export default CardHomProducts;
