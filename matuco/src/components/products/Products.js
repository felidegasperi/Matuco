import React, { useContext, useState } from "react";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import FilteredProducts from "../filteredProducts/FilteredProducts";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import AddProduct from "../listProducts/AddProduct";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState();

  const { user } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);

  const apiUrl = "http://localhost:8000/products";
  const { products, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
        <div className="d-flex justify-content-end p-4">
          <FilteredProducts
            filterProduct={filterProduct}
            setFilterProduct={setFilterProduct}
          />
        </div>
        <div className="row p-5">
          {filterProduct
            ? products
                .filter((product) => product.type === filterProduct)
                .map((filteredProduct, index) => (
                  <CardProducts key={index} product={filteredProduct} />
                ))
            : products.map((product, index) => (
                <CardProducts key={index} product={product} />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
