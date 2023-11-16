import React, { useContext } from "react";

import "./CardProducts.css";

import { CiCirclePlus } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { CartContext } from "../../services/shoppingCartContext/ShoppingCart.context";

const CardProducts = ({ id, name, price, type }) => {
  const { theme } = useContext(ThemeContext);
  const [cart, setCart] = useContext(CartContext);

  const AddToCart = () => {
    console.log(id);
    setCart((currentItem) => {
      // verifica que si el id del producto que se esta seleccionando ya esta en el carrito
      const isItemFound = currentItem.find((item) => item.id === id);
      //si se encuentra se le incrementa en 1 y sino vamos a return el producto
      if (isItemFound) {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        //si es la primera vez que se agrega, lo hace de esta manera
      } else {
        return [...currentItem, { id, name, type, quantity: 1, price }];
      }
    });
  };

  const RemoveItem = (id) => {
    setCart((currentItem) => {
      //si la cantidad de elementos del id que seleccionamos es 1, se va a borrar del carrito
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        // si la cantidad no es 1, osea que es mayor, va a disminuirla en 1
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // y si todo esto no es verdadero, va a retornar al producto
            return item;
          }
        });
      }
    });
  };

  //busca cuantos elementos fueron seleccionados de un producto en especifico
  //retorna la cantidad y sino es 0
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="col-md-3">
      <div className={`${theme === "DARK" ? "card-dark bg-dark" : "card"}`}>
        {quantityPerItem > 0 && (
          <div className="item-quantity"> {quantityPerItem} </div>
        )}
        <div className={`${theme === "DARK" ? "card-info-dark" : "card-info"}`}>
          <p
            className={`${theme === "DARK" ? "text-title-dark" : "text-title"}`}
          >
            {name}
          </p>
          <p className={`${theme === "DARK" ? "text-body-dark" : "text-body"}`}>
            {type}
          </p>
        </div>
        <div
          className={`${theme === "DARK" ? "card-footer-dark" : "card-footer"}`}
        >
          <span
            className={`${theme === "DARK" ? "text-title-dark" : "text-title"}`}
          >
            ${price}
          </span>
          {quantityPerItem === 0 ? (
            <div
              onClick={AddToCart}
              className={`${
                theme === "DARK" ? "card-button-dark" : "card-button"
              }`}
            >
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </div>
          ) : (
            <div>
              <h4>
                <CiCirclePlus color="green" onClick={() => AddToCart()} />
              </h4>
            </div>
          )}
          {quantityPerItem > 0 && (
            <div>
              <h4>
                <IoIosRemoveCircleOutline
                  color="red"
                  onClick={() => RemoveItem(id)}
                />
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
