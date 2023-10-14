import React, { useState } from "react";
import { useShop } from "context/shop-context";
import { CartItem } from "components/cart/CartItem";
import { useNavigate } from "react-router-dom";
import "styles/cart.css";
import Button from "react-bootstrap/Button";

function Cart() {
  const [toggle, setToggle] = useState(false);
  const { cartItems, getTotalCartAmount, checkout } = useShop();
  const total = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {console.log("cart items", cartItems)}
        {cartItems?.map((item) => {
          return <CartItem key={item._id} data={item} />;
        })}
      </div>

      {total > 0 ? (
        <div className="checkout">
          <p> Total: ${total} </p>
          <Button onClick={() => navigate("/")}> Continue Shopping </Button>
          <Button
            disabled={toggle}
            onClick={async () => {
              setToggle(!toggle);
              await checkout();
              navigate("/", { replace: true });
            }}
          >
            {" "}
            Place Order{" "}
          </Button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}
export default Cart;
