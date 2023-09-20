import React, { useEffect, useState } from "react";
import ProductCard from "components/ProductCard";  
import "styles/shop.css";
import { getAllProducts, getProductsBasedOnTag } from "api/products";
import Categories from "components/Categories";


function Shop () {
  //doesn't matter if these two lines are inside the useEffect hook??
  const [products, setProducts] = React.useState([]);
  const [tag, setTag] = useState("");
  
  //useEffect
  useEffect(() => {
    async function fetchProducts(){
    const data = await getAllProducts();
    //await getProductsBasedOnTag(tag);
    setProducts(data)
    }
    fetchProducts();
  },[tag])
  
  return (
    <div className="shop">
      <Categories/>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;