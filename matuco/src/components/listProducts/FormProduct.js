import React, { useContext, useRef, useState } from "react";

import { ThemeContext } from "../../services/themeContext/Theme.context";

const FormProduct = ({ onNewProductHandler, setIsValid }) => {
  const [nameProduct, setNameProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [error, setError] = useState("");

  const nameProductRef = useRef(null);
  const typeProductRef = useRef(null);
  const priceProductRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  const changeNameProductHandler = (e) => {
    setNameProduct(e.target.value);
    setError("");
  };
  const changeTypeProductHandler = (e) => {
    setTypeProduct(e.target.value);
    setError("");
  };
  const changePriceProductHandler = (e) => {
    setPriceProduct(e.target.value);
    setError("");
  };

  const onCancelFormHandler = () => {
    setIsValid(false);
  };

  const productHandler = (e) => {
    e.preventDefault();
    setError(""); // Limpia el mensaje de error al intentar enviar el formulario nuevamente
    if (nameProductRef.current.value.length === 0) {
      nameProductRef.current.focus();
      nameProductRef.current.style.borderColor = "red";
      nameProductRef.current.style.outline = "none";
      setError("Debes ingresar un nombre valido.");
    }
    if (
      priceProductRef.current.value.length === 0 ||
      priceProduct.includes("E") ||
      priceProduct.includes("e") ||
      priceProduct.includes("-")
    ) {
      priceProductRef.current.focus();
      priceProductRef.current.style.borderColor = "red";
      priceProductRef.current.style.outline = "none";
      setError("Debes ingresar un precio valido.");
    } else if (typeProductRef.current.value.length === 0) {
      typeProductRef.current.focus();
      typeProductRef.current.style.borderColor = "red";
      typeProductRef.current.style.outline = "none";
      setError("Por favor ingresa un tipo de producto.");
    } else {
      const newProduct = {
        name: nameProduct,
        price: priceProduct,
        type: typeProduct,
      };
      onNewProductHandler(newProduct);
      setIsValid(false);
      console.log(newProduct);
    }
  };

  return (
    <form className="border rounded-3 p-5 ">
      <h2>Ingreso de un producto</h2>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese el nombre del producto:</label>
        <input
          className={`${
            theme === "DARK"
              ? "form-control form-control-lg bg-dark text-light"
              : "form-control form-control-lg bg-light text-dark"
          }`}
          placeholder=""
          type="text"
          value={nameProduct}
          ref={nameProductRef}
          onChange={changeNameProductHandler}
        />
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Seleccione el tipo de producto:</label>
        <select
          className={`${
            theme === "DARK"
              ? "form-control form-control-lg bg-dark text-light"
              : "form-control form-control-lg bg-light text-dark"
          }`}
          value={typeProduct}
          ref={typeProductRef}
          onChange={changeTypeProductHandler}
        >
          <option value="">Seleccione tipo de producto</option>
          <option value="mate">mate</option>
          <option value="termo">termo</option>
          <option value="bombilla">bombilla</option>
        </select>
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese el precio del producto:</label>
        <input
          className={`${
            theme === "DARK"
              ? "form-control form-control-lg bg-dark text-light"
              : "form-control form-control-lg bg-light text-dark"
          }`}
          min="0"
          placeholder=""
          type="number"
          value={priceProduct}
          ref={priceProductRef}
          onChange={changePriceProductHandler}
        />
      </div>
      <div className="text-danger">{error}</div>
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-outline-secondary col-4"
          onClick={productHandler}
        >
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger col-4"
          onClick={onCancelFormHandler}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormProduct;
