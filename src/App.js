import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInfo from "components/UserInfo";
import Home from "components/Home";
import { ShopContextProvider } from "context/shop-context";
import LogIn from "components/LogIn";
import Orders from "components/Orders";
import MyProducts from "components/MyProducts";
import AddProduct from "components/AddProduct";
import AboutUs from "components/AboutUs";
import NavbarComponent from "components/NavbarComponent";
import { AuthContextProvider } from "context/auth-context";
import Cart from "components/cart/Cart";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ShopContextProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<LogIn submitButton={"login"} />} />
            <Route
              path="/register"
              element={<LogIn submitButton={"register"} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/complete-profile"
              element={<UserInfo submitButton={"save"} />}
            />
            <Route
              path="/edit-profile"
              element={<UserInfo submitButton={"update"} />}
            />
            <Route path="/products" element={<MyProducts />} />
            <Route
              path="/add-product"
              element={<AddProduct button={"add"} />}
            />
            <Route
              path="/update-product"
              element={<AddProduct button={"update"} />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ShopContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
