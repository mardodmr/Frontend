import { CartItem } from "components/cart/CartItem";
import { useShop } from "context/shop-context";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import useAuthStore from "zustand-stores/auth-store";

function Cart() {
  const [toggle, setToggle] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { cartItems, getTotalCartAmount, checkout } = useShop();
  const total = getTotalCartAmount();
  const navigate = useNavigate();

  //checkout btn
  const handleClick = async () => {
    setToggle(!toggle);
    if (isAuthenticated) {
      await checkout();
      navigate("/", { replace: true });
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <h1>Your Cart Items:</h1>
      </div>
      <div className="product-card">
        {cartItems?.map((item) => {
          return <CartItem key={item._id} data={item} />;
        })}
      </div>

      {total > 0 ? (
        <div className="checkout">
          <h3> Total: ${total.toLocaleString()} </h3>
          <Stack direction="horizontal" gap={2}>
            <Button onClick={() => navigate("/")}> Continue Shopping </Button>
            <Button disabled={toggle} onClick={handleClick}>
              {" "}
              Place Order{" "}
            </Button>
          </Stack>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}
export default Cart;
