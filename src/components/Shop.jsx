import React, { useEffect, useState } from "react";
import ProductCard from "components/ProductCard";
import "styles/shop.css";
import Button from "react-bootstrap/Button";
import {
  getAllProducts,
  getProductsBasedOnTag,
  getProductsBasedOnUserType,
} from "api/products";
import Categories from "components/Categories";
import { useBanner } from "context/banner-context";

function Shop() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [tag, setTag] = useState("ALL");
  const { userType } = useBanner();

  //useEffect
  useEffect(() => {
    async function fetchProducts() {
      // Filter based on user type
      if (userType !== "") {
        const data = await getProductsBasedOnUserType(userType);
        setAllProducts(data);
        return;
      }
      // Filter based on Categories
      if (tag === "ALL") {
        const data = await getAllProducts();
        setAllProducts(data);
      } else {
        const data = await getProductsBasedOnTag(tag.toLowerCase());
        setAllProducts(data);
      }
    }
    fetchProducts();
  }, [tag, userType]);

  //another useeffect

  return (
    <div className="shop">
      <Categories tag={tag} setTag={setTag} />
      <div className="product-card">
        {allProducts?.map((product) => {
          return <ProductCard key={product._id} data={product} cart={true} />;
        })}
      </div>
      {/* <Button onClick={(e) => setPage(page + 1)}>More...</Button> */}
    </div>
  );
}
export default Shop;
