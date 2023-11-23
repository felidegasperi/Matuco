import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import CardHome from "./CardHome";

const CardHomProducts = () => {
  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, error } = useFetchProducts(apiUrl);

  // Función para obtener una lista aleatoria de productos
  const shuffleArray = (array) => {
    const shuffledArray = array.slice(); // Crear una copia del array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

   // Obtener una lista aleatoria de productos
   const randomProducts = shuffleArray(products);
  return (
    <div className=" d-flex m-5">
      {randomProducts
        .slice(0, 4) // Mostrar solo los primeros 4 productos (puedes ajustar este número)
        .map((product) => (
          <div className="col" key={product.id}>
            {/* Supongo que CardHome es un componente que renderiza un producto */}
            <CardHome product={product} />
          </div>
        ))}
    </div>
  );
};

export default CardHomProducts;
