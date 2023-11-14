import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormProduct from "./FormProduct";

import { ThemeContext } from "../../services/themeContext/Theme.context";

const AddProduct = () => {
  const [isValid, setIsValid] = useState(false);
  const [products, setProducts] = useState([]);

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onValidHandler = () => {
    setIsValid(true);
    navigate("/listProducts");
  };

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

  const postNewProductHandler = useCallback(
    (product) => {
      const newProductId =
        products.length > 0 ? products[products.length - 1].id + 1 : 1;
      console.log("User data in postNewUserHandler: ", product);
      fetch("http://localhost:8000/products", {
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
          setProducts(newProductArray);
        })
        .catch((error) => console.log(error));
    },
    [products]
  );

  // const postNewProductHandler = useCallback(async (product) => {
  //   try {
  //     console.log("User data in postNewUserHandler: ", product);
  //     const response = await fetch("http://localhost:8000/products", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: product.name,
  //         type: product.type,
  //         price: product.price,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("The response had some errors");
  //     }

  //     const newProduct = await response.json();
  //     console.log("newProduct en then", newProduct);
  //     setProducts((prevProducts) => [newProduct, ...prevProducts]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

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
