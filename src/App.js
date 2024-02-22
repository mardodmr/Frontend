import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "components/AboutUs";
import Home from "components/home/Home";
import MyProducts from "components/MyProducts";
import Orders from "components/Orders";
import Cart from "components/cart/Cart";
import Login from "components/login-forms/Login";
import Register from "components/login-forms/Register";
import AddProduct from "components/product-forms/AddProduct";
import UpdateProduct from "components/product-forms/UpdateProduct";
import CompleteProfile from "components/user-forms/CompleteProfile";
import UpdateProfile from "components/user-forms/UpdateProfile";
import { ShopContextProvider } from "context/shop-context";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
  );
}

export default App;
