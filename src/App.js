import AboutUs from "components/AboutUs";
import CompleteProfile from "components/user-forms/CompleteProfile";
import UpdateProfile from "components/user-forms/UpdateProfile";
import Home from "components/Home";
import LogIn from "components/LogIn";
import MyProducts from "components/MyProducts";
import Orders from "components/Orders";
import Cart from "components/cart/Cart";
import { AuthContextProvider } from "context/auth-context";
import { ShopContextProvider } from "context/shop-context";
import { Route, Routes } from "react-router-dom";
import AddProduct from "components/product-forms/AddProduct";
import UpdateProduct from "components/product-forms/UpdateProduct";

function App() {
  return (
    <AuthContextProvider>
      <ShopContextProvider>
        <Routes>
          <Route path="/login" element={<LogIn submitButton={"login"} />} />
          <Route
            path="/register"
            element={<LogIn submitButton={"register"} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/edit-profile" element={<UpdateProfile />} />
          <Route path="/products" element={<MyProducts />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </AuthContextProvider>
  );
}

export default App;
