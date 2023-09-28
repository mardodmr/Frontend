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
  //doesn't matter if these two lines are inside the useEffect hook??
  const [allProducts, setAllProducts] = React.useState([]);
  const [tagProducts, setTagProducts] = useState([]);
  const [bannerProducts, setBannerProducts] = useState([]);
  // const [products, setProducts] = useState([]);
  const [tag, setTag] = useState("ALL");
  const [page, setPage] = useState(0);
  const { userType } = useBanner();

  // const products = allProducts;
  let products = [];
  if (userType === "") {
    products = allProducts;
  }
  console.log("Data", products);

  //useEffect
  useEffect(() => {
    async function fetchProducts() {
      // Filter based on user type
      if (userType) {
        const data = await getProductsBasedOnUserType(userType, page);
        setBannerProducts([...bannerProducts, ...data]);
        return;
      }

      // Filter based on Categories
      if (tag === "ALL") {
        const data = await getAllProducts(page);
        setAllProducts(data);
      } else {
        const data = await getProductsBasedOnTag(tag.toLowerCase(), page);
        setTagProducts([...tagProducts, ...data]);
      }
    }
    fetchProducts();
  }, [tag, userType, page]);

  //another useeffect

  return (
    <div className="shop">
      <Categories tag={tag} setTag={setTag} />
      <div className="product-card">
        {products.map((product) => {
          return <ProductCard key={product._id} data={product} cart={true} />;
        })}
      </div>
      <Button onClick={(e) => setPage(page + 1)}>More...</Button>
    </div>
  );
}
export default Shop;
