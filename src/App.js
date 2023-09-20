import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "components/Shop";
import UserInfo from "components/UserInfo";
import Banner from "components/Banner";
import Cart from "components/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
import LogIn from "components/LogIn";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
