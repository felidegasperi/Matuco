import React, { useRef, useState } from "react";

const FormProduct = ({ onPostNewProductHandler }) => {
  const [nameProduct, setNameProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [error, setError] = useState("");
  const nameProductRef = useRef(null);
  const typeProductRef = useRef(null);
  const priceProductRef = useRef(null);

  const changeNameProductHandler = (e) => {
    setNameProduct(e.target.value);
  };
  const changeTypeProductHandler = (e) => {
    setTypeProduct(e.target.value);
  };

  const changePriceProductHandler = (e) => {
    setPriceProduct(e.target.value);
  };

  const productHandler = () => {
    if (nameProductRef.current.value.length === 0) {
      nameProductRef.current.focus();
      nameProductRef.current.style.borderColor = "red";
      nameProductRef.current.style.outline = "none";
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form className="border rounded-3 p-5 ">
      <h2>Ingreso de un producto</h2>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese el nombre del producto:</label>
        <input
          className="form-control form-control-lg"
          placeholder=""
          type="text"
          value={nameProduct}
          ref={nameProductRef}
          onChange={changeNameProductHandler}
        />
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese el tipo de producto:</label>
        <input
          className="form-control form-control-lg"
          placeholder=""
          type="text"
          value={typeProduct}
          ref={typeProductRef}
          onChange={changeTypeProductHandler}
        />
      </div>
      <div className="input-conteiner mt-3 mb-4">
        <label>Ingrese el precio del producto:</label>
        <input
          className="form-control form-control-lg"
          placeholder=""
          type="text"
          value={priceProduct}
          ref={priceProductRef}
          onChange={changePriceProductHandler}
        />
      </div>
      <div className="text-danger">{error}</div>
      <button onClick={productHandler}>Agregar</button>
    </form>
  );
};

export default FormProduct;
