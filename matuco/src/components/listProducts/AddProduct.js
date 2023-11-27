/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useContext, useState } from "react";

import FormProduct from "./FormProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const AddProduct = () => {
  const [isValid, setIsValid] = useState(false);
  // const [products, setProducts] = useState([]);

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, setProducts, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const onValidHandler = () => {
    setIsValid(true);
    navigate("/listProducts");
  };

  const postNewProductHandler = useCallback(
    (product) => {
      const newProductId =
        products.length > 0 ? products[products.length - 1].id + 1 : 1;
      console.log("User data in postNewUserHandler: ", product);
      fetch("https://matuco-fake-api.onrender.com/products", {
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
          toast.success("Se agrego correctamente el producto!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setProducts(newProductArray);
        })
        .catch((error) => console.log(error));
    },
    [products, setProducts]
  );

  return (
    <div className="row justify-content-center mt-5 p-5">
      <div className=" col-1 d-flex align-items-center">
        {isValid === false && (
          <button
            className={`${
              theme === "DARK"
                ? "btn btn-outline-light d-flex justify-content-center"
                : "btn btn-outline-dark d-flex justify-content-center"
            }`}
            onClick={onValidHandler}
          >
            Agregar Producto
          </button>
        )}
      </div>
      <div className="col-6">
        {isValid === true && (
          <FormProduct
            onNewProductHandler={postNewProductHandler}
            setIsValid={setIsValid}
            isValid={isValid}
          />
        )}
      </div>
    </div>
  );
};

export default AddProduct;
