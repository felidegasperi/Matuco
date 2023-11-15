import React from "react";
import "./FilteredProducts.css";

const FilteredProducts = () => {
  return (
    <div>
      <div class="radio-input">
        <label>
          <input type="radio" id="value-1" name="value-radio" value="value-1" />
          <span>Bombillas</span>
        </label>
        <label>
          <input type="radio" id="value-2" name="value-radio" value="value-2" />
          <span>Termos</span>
        </label>
        <label>
          <input type="radio" id="value-3" name="value-radio" value="value-3" />
          <span>Mates</span>
        </label>
        <span class="selection"></span>
      </div>
    </div>
  );
};

export default FilteredProducts;
