import React, { useContext, useState } from "react";

import ListProducts from "./ListProducts";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const ProductContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { theme } = useContext(ThemeContext);

  const apiUrl = "https://matuco-fake-api.onrender.com/products";
  const { products, setProducts, error } = useFetchProducts(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const deleteProductHandler = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    console.log(id);
    if (confirmDelete) {
      fetch(`https://matuco-fake-api.onrender.com/products/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Proucto eliminado con exito", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
            );
          } else {
            toast.warn("No se pudo eliminar", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            throw new Error("No se pudo eliminar el producto.");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const editProductHandler = (product) => {
    console.log(
      "Estado de selectedProduct antes de la solicitud PUT:",
      product
    );
    setSelectedProduct(product);
  };
  const cancelFormHandler = () => {
    setSelectedProduct(null);
  };

  const updateProductHandler = () => {
    if (!selectedProduct) return;

    // Llamada a la API para actualizar el producto seleccionado
    fetch(
      `https://matuco-fake-api.onrender.com/products/${selectedProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProduct),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el producto");
        }
        return response.json();
      })
      .then((updatedProduct) => {
        // Actualizar la lista de productos con el producto actualizado

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        toast.success("Actualizado el producto correctamente", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setSelectedProduct(null);
      })
      .catch((err) => {
        console.error("Error", err);
        toast.warn(
          "Error al actualizar el producto. Por favor, inténtelo de nuevo.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        console.log(
          "Error al actualizar el producto. Por favor, inténtelo de nuevo."
        );
      });
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <ToastContainer />
      <div className="min-vh-100">
        <ListProducts
          products={products}
          deleteProductHandler={deleteProductHandler}
          editProductHandler={editProductHandler}
        />
        <div className="row justify-content-center mt-5 p-5">
          {selectedProduct && (
            <form className="border rounded-3 col-6 p-5 mt-5">
              <h2>Ingreso de un producto</h2>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el nombre del producto:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  placeholder={`${selectedProduct.name}`}
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue.length <= 0) {
                      alert("Ingrese un nombre correcto");
                    } else {
                      setSelectedProduct({
                        ...selectedProduct,
                        name: inputValue,
                      });
                    }
                  }}
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Tipo de producto a modificar:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  disabled
                  placeholder={`${selectedProduct.type}`}
                  value={selectedProduct.type}
                />
              </div>
              <div className="input-container mt-3 mb-4">
                <label>Ingrese el precio del producto:</label>
                <input
                  className={`${
                    theme === "DARK"
                      ? "form-control form-control-lg bg-dark text-light"
                      : "form-control form-control-lg bg-light text-dark"
                  }`}
                  min="0"
                  placeholder={`${selectedProduct.price}`}
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value);
                    if (inputValue <= 0) {
                      alert("Ingrese un precio correcto");
                    } else {
                      setSelectedProduct({
                        ...selectedProduct,
                        price: inputValue,
                      });
                    }
                  }}
                />
              </div>
              {/* <div className="text-danger">{error}</div> */}
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary col-4"
                  onClick={() => {
                    updateProductHandler(selectedProduct);
                  }}
                >
                  Modificar producto
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger col-4"
                  onClick={cancelFormHandler}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductContainer;
