import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(storedCart);
  

  // Actualizar el localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
