import React, { memo, useState } from "react";
import FormProduct from "./FormProduct";

const AddProduct = memo(({onPostNewProductHandler}) => {
  const [isValid, setIsValid] = useState(false);
  const onValidHandler = () => {
    setIsValid(true);
  };
  return (
    <div>
      <button onClick={onValidHandler}>Agregar Producto</button>

      <div>
        {isValid === true ? (
          <FormProduct onPostNewProductHandler={onPostNewProductHandler}/>
        ) : (
          <p>Haga Click en el Boton Agregar Producto</p>
        )}
      </div>
    </div>
  );

});

export default AddProduct;
