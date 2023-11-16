import React from "react";
import "./FilteredProducts.css";

const FilteredProducts = ({ setFilterProduct }) => {
  const onBombillaHandler = () => {
    setFilterProduct("bombilla");
  };
  const onAllHandler = () => {
    setFilterProduct(null);
  };
  const onMatesHandler = () => {
    setFilterProduct("mate");
  };
  const onTermosHandler = () => {
    setFilterProduct("termo");
  };
  return (
    <div className=" justify-content-end ">
      <div class="radio-input">
        <label>
          <input
            value="value-1"
            name="value-radio"
            id="value-1"
            type="radio"
            onClick={onAllHandler}
          />
          <span>Todos</span>
        </label>
        <label>
          <input
            value="value-2"
            name="value-radio"
            id="value-2"
            type="radio"
            onClick={onTermosHandler}
          />
          <span>Termos</span>
        </label>
        <label>
          <input
            value="value-3"
            name="value-radio"
            id="value-3"
            type="radio"
            onClick={onBombillaHandler}
          />
          <span>Bombillas</span>
        </label>
        <label>
          <input
            value="value-3"
            name="value-radio"
            id="value-3"
            type="radio"
            onClick={onMatesHandler}
          />
          <span>Mates</span>
        </label>
        <span class="selection"></span>
      </div>
    </div>
  );
};

export default FilteredProducts;
