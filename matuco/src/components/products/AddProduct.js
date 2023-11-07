import React, { memo, useState } from "react";
import FormProduct from "./FormProduct";

const AddProduct = ({ onPostNewProductHandler }) => {
  console.log("new product created");
  const postProductHandler = (product) => {
    onPostNewProductHandler(product);
  };
  const [isValid, setIsValid] = useState(false);
  const onValidHandler = () => {
    setIsValid(true);
  };
  return (
    <div className="row justify-content-center mt-5 p-5">
      <div className=" col-1  d-flex align-items-center">
        {isValid === false && (
          <button
            className="btn btn-outline-dark d-flex justify-content-center"
            onClick={onValidHandler}
          >
            Agregar Producto
          </button>
        )}
      </div>
      <div className="col-6">
        {isValid === true ? (
          <FormProduct
            onNewProductHandler={postProductHandler}
            setIsValid={setIsValid}
            isValid={isValid}
          />
        ) : (
          <div>
            <p className="d-flex justify-content-center">
              Haga Click en el Boton Agregar Producto
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
