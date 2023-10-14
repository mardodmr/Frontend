import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useShop } from "context/shop-context";

export const AddCartItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const { addToCart } = useShop();

  return (
    <Button
      variant="primary"
      disabled={toggle}
      onClick={() => {
        console.log("clicked add to cart");
        addToCart(props.data);
        setToggle(!toggle);
      }}
    >
      Add To Cart{" "}
    </Button>
  );
};

export default AddCartItem;
