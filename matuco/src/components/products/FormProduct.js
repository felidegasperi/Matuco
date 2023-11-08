import React, { useRef, useState } from "react";

const FormProduct = ({ onNewProductHandler, setIsValid }) => {
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

  const onCancelFormHandler = () => {
    setIsValid(false);
  };

  const productHandler = (e) => {
    e.preventDefault();
    if (nameProductRef.current.value.length === 0) {
      nameProductRef.current.focus();
      nameProductRef.current.style.borderColor = "red";
      nameProductRef.current.style.outline = "none";
      setError("Debes ingresar un nombre valido.");
    }
    if (
      priceProductRef.current.value === "0" ||
      priceProductRef.current.value.length === 0
    ) {
      priceProductRef.current.focus();
      priceProductRef.current.style.borderColor = "red";
      priceProductRef.current.style.outline = "none";
      setError("Debes ingresar un precio valido.");
    } else if (typeProductRef.current.value.length === 0) {
      typeProductRef.current.focus();
      typeProductRef.current.style.borderColor = "red";
      typeProductRef.current.style.outline = "none";
    } else {
      const newProduct = {
        name: nameProduct,
        price: priceProduct,
        type: typeProduct,
      };
      onNewProductHandler(newProduct);
      console.log(newProduct);
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
        <label>Seleccione el tipo de producto:</label>
        {/* <select
          className="form-control form-control-lg"
          value={typeProduct}
          ref={typeProductRef}
          onChange={changeTypeProductHandler}
        >
          <option>mate</option>
          <option>termo</option>
          <option>bombilla</option>
        </select> */}
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
