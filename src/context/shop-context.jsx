import { createContext, useEffect, useState, useContext } from "react";
import { creatOrder } from "api/orders";

export const ShopContext = createContext(null);

export const useShop = () => {
  return useContext(ShopContext);
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalCartAmount = () => {
    const sum = cartItems.reduce((accumulator, obj) => {
      return accumulator + obj.price;
    }, 0);
    return sum;
  };

  const addToCart = (item) => {
    console.log("I'm adding items to cart", item);

    setCartItems([...cartItems, item]);
  };

  const removeFromCart = () => {};

  const checkout = async () => {
    for (let i = 0; i < cartItems.length; i++) {
      await creatOrder(cartItems[i]);
    }
  };

  const value = {
    useShop,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    checkout,
  };

  return (
    <ShopContext.Provider value={value}> {children} </ShopContext.Provider>
  );
};
