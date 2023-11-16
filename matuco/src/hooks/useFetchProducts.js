import { useState, useEffect } from "react";

export const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        accept: "aplication/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener los datos");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err));
  }, [url]);

  return { products, setProducts, error };
};
