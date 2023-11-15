import React, { useContext, useEffect, useState } from "react";
import ListProducts from "./ListProducts";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { theme } = useContext(ThemeContext);

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

  const deleteProductHandler = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    console.log(id);
    if (confirmDelete) {
      fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("Producto eliminado con exito");
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
            );
            // const newListProducts = products.filter(
            //   (product) => product.id !== id
            // );
            // setProducts(newListProducts);
          } else {
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

    console.log("Datos a enviar:", JSON.stringify(selectedProduct));
    console.log(
      "Estado de selectedProduct antes de la solicitud PUT:",
      selectedProduct
    );

    // Llamada a la API para actualizar el producto seleccionado
    fetch(`http://localhost:8000/products/${selectedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    })
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
        // Limpiar la selección después de la actualización
        // setSelectedProduct(null);
      })
      .catch((err) => {
        console.error("Error", err);
        console.log(
          "Error al actualizar el producto. Por favor, inténtelo de nuevo."
        );
      });
  };

  return (
    <div className={`${theme === "DARK" && "dark-theme"}`}>
      <NavBar />
      <div>
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
