import React, { useContext, useState } from "react";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import FilteredProducts from "../filteredProducts/FilteredProducts";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta

import { ThemeContext } from "../../services/themeContext/Theme.context";

import { useFetchProducts } from "../../hooks/useFetchProducts";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState();

  const { theme } = useContext(ThemeContext);

  const apiUrl = "http://localhost:8000/products";
  const { products, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={`${theme === "DARK" && "dark-theme"} min-vh-100`}>
      <NavBar />
      <div>
        <div className="d-flex justify-content-end p-4 ">
          <FilteredProducts
            filterProduct={filterProduct}
            setFilterProduct={setFilterProduct}
          />
        </div>
        <div className="container text-center min-vh-">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-5">
            {filterProduct ? (
              products
                .filter((product) => product.type === filterProduct)
                .map((filteredProduct, index) => (
                  <div className="col-3">
                    <CardProducts key={index} product={filteredProduct} />
                  </div>
                ))
            ) : products.length === 0 ? (
              <p>
                Ocurrió un error, no hay productos cargados. Pregunta al dueño
                de la tienda.
              </p>
            ) : (
              products.map((product, index) => (
                <div className="col-3">
                  <CardProducts key={index} product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
