import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "components/home/Home";
import Cart from "components/cart/Cart";
import Login from "components/login-forms/Login";
import Orders from "components/orders/Orders";
import AboutUs from "components/AboutUs";
import Register from "components/login-forms/Register";
import MyProducts from "components/products/MyProducts";
import { ShopContextProvider } from "context/shop-context";
import TableSkeleton from "components/skeletons/TableSkeleton";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/testing" element={<TableSkeleton />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MyProducts />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
