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
    console.log(id);
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
  };

  const editProductHandler = (product) => {
    setSelectedProduct(product);
  };

  const updateProductHandler = () => {
    if (!selectedProduct) return;

    // Llamada a la API para actualizar el producto seleccionado
    fetch(`http://localhost:8000/products/${selectedProduct.id}`, {
      method: "PUT",
      // headers: {
      //   "Content-Type": "application/json",
      // },
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
        setSelectedProduct(null);
      })
      .catch((err) => console.error("Error", err));
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
        <div>
          {selectedProduct && (
            <form className="d-flex border rounded-3 col-6 p-5 mt-5">
              <div className="">
                <div className="">
                  <h2>Ingreso de un producto</h2>
                  <div className="input-container mt-3 mb-4">
                    <label>Ingrese el nombre del producto:</label>
                    <input
                      // className={`${
                      //   theme === "DARK"
                      //     ? "form-control form-control-lg bg-dark text-light"
                      //     : "form-control form-control-lg bg-light text-dark"
                      // }`}
                      placeholder=""
                      type="text"
                      // value={nameProduct}
                      // ref={nameProductRef}
                      // onChange={changeNameProductHandler}
                    />
                  </div>
                  <div className="input-container mt-3 mb-4">
                    <label>Seleccione el tipo de producto:</label>
                    <select
                    // className={`${
                    //   theme === "DARK"
                    //     ? "form-control form-control-lg bg-dark text-light"
                    //     : "form-control form-control-lg bg-light text-dark"
                    // }`}
                    // value={typeProduct}
                    // ref={typeProductRef}
                    // onChange={changeTypeProductHandler}
                    >
                      <option value="">Seleccione tipo de producto</option>
                      <option value="mate">mate</option>
                      <option value="termo">termo</option>
                      <option value="bombilla">bombilla</option>
                    </select>
                  </div>
                  <div className="input-container mt-3 mb-4">
                    <label>Ingrese el precio del producto:</label>
                    <input
                      // className={`${
                      //   theme === "DARK"
                      //     ? "form-control form-control-lg bg-dark text-light"
                      //     : "form-control form-control-lg bg-light text-dark"
                      // }`}
                      min="0"
                      placeholder=""
                      type="number"
                      // value={priceProduct}
                      // ref={priceProductRef}
                      // onChange={changePriceProductHandler}
                    />
                  </div>
                  {/* <div className="text-danger">{error}</div> */}
                  <div className="row justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary col-4"
                      onClick={updateProductHandler}
                    >
                      Agregar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger col-4"
                      // onClick={onCancelFormHandler}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
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
