import React, { useContext, useState } from "react";

import "./Products.css";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import FilteredProducts from "../filteredProducts/FilteredProducts";
import CardProducts from "./CardProducts"; // Asegúrate de importar el componente CardProducts desde la ubicación correcta
import Loaders from "../ui/loaders/Loaders";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { AuthenticationContext } from "../../services/authenticationContext/Authentication.context";
import { APIContext } from "../../services/apiContext/API.context";

import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [filterProduct, setFilterProduct] = useState();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);
  const { user } = useContext(AuthenticationContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const navigateLoginHandler = () => {
    navigate("/login");
  };
  const navigateRegisterHandler = () => {
    navigate("/register");
  };

  return (
    <div>
      {user === null ? (
        <>
          <div className={`${theme === "DARK" && "dark-theme"}`}>
            <NavBar />
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
              <div>
                <img
                  src="../assets/detective.png"
                  alt="sherlock"
                  className="img-custom"
                />
              </div>
              <p className="mt-5">
                Para poder ver los productos inicie sesion! por el siguiente
                boton te enviara a iniciar sesion con tu cuenta!
              </p>
              <div>
                <button
                  onClick={navigateLoginHandler}
                  className={`${
                    theme === "DARK"
                      ? "btn btn-outline-light btn-sm p-2 m-2 w-100"
                      : "btn btn-outline-dark btn-sm p-2 m-2 w-100"
                  }`}
                >
                  Inicie Sesion
                </button>
              </div>
              <div>
                <a onClick={navigateRegisterHandler} class="link-primary">
                  No tienes una cuenta? createla aqui!
                </a>
              </div>
            </div>
            <Footer />
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default Products;
