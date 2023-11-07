import React, { memo, useState } from "react";
import FormProduct from "./FormProduct";

const AddProduct = memo(({onPostNewProductHandler}) => {
  const [isValid, setIsValid] = useState(false);
  const onValidHandler = () => {
    setIsValid(true);
  };
  return (
    <div className="row justify-content-around mt-5 p-5">
      <div className="col-4  d-flex align-items-center">
      <button className="btn btn-outline-dark d-flex justify-content-center" onClick={onValidHandler}>Agregar Producto</button>
      </div>
      <div className="col-4">
        {isValid === true ? (
          <FormProduct onPostNewProductHandler={onPostNewProductHandler} setIsValid={setIsValid} isValid={isValid}/>
        ) : (
          <p>Haga Click en el Boton Agregar Producto</p>
        )}
      </div>
    </div>
  );

});

export default AddProduct;
