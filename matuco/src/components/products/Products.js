import React, { useContext, useState } from "react";

import "./Products.css";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import FilteredProducts from "../filteredProducts/FilteredProducts";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta

import { ThemeContext } from "../../services/themeContext/Theme.context";

import { useFetchProducts } from "../../hooks/useFetchProducts";
import { APIContext } from "../../services/apiContext/API.context";
import Loaders from "../ui/loaders/Loaders";

const Products = () => {
  const [filterProduct, setFilterProduct] = useState();

  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={`${theme === "DARK" && "dark-theme"} min-vh-100`}>
      <NavBar />
      <div className="min-vh-100">
        <div className="d-flex justify-content-end p-4 ">
          <FilteredProducts
            filterProduct={filterProduct}
            setFilterProduct={setFilterProduct}
          />
        </div>
        <div className="container text-center min-vh-">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-5">
            {isLoading && <Loaders className="justify-content-center" />}
            {filterProduct
              ? products
                  .filter((product) => product.type === filterProduct)
                  .map((filteredProduct, product) => (
                    <CardProducts key={product.id} {...filteredProduct} />
                  ))
              : products.map((product) => (
                  <CardProducts key={product.id} {...product} />
                ))}
            {products === "" && (
              <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <h2> No hay productos en este momento.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
