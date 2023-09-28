import React from "react";
import Button from "react-bootstrap/Button";
import { useShop } from "context/shop-context";

export const AddCartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useShop();

  const cartItemCount = cartItems[id];

  return (
    <Button variant="primary" onClick={() => addToCart(id)}>
      Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
    </Button>
  );
};

export default AddCartItem;
