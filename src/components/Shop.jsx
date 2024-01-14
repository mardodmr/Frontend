import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductsBasedOnTag,
  getProductsBasedOnUserType,
} from "api/products";
import { useBanner } from "context/banner-context";
import ProductCard from "components/ProductCard";
import Categories from "components/Categories";
import SidePanel from "components/SidePanel";
import GridLayout from "components/GridLayout";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [tag, setTag] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const { userType } = useBanner();

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
        setLoading(false);
        setAllProducts(data);
      } else {
        const data = await getProductsBasedOnTag(tag.toLowerCase());
        setAllProducts(data);
      }
    }
    fetchProducts();
  }, [tag, userType]);

  return (
    <>
      <Categories tag={tag} setTag={setTag} />
      <div style={{ display: "flex" }}>
        {/* <Grid width={"75%"} margin={"auto"} templateColumns="repeat (3, 1fr)">
        <Show above="lg">
      <GridItem colSpan={1} bg={"red"}> */}
        <SidePanel />
        {/* </GridItem> */}
        {/* </Show> */}
        {/* <GridItem colStart={2} colEnd={3}> */}
        <GridLayout>
          {allProducts?.map((product) => {
            return <ProductCard key={product._id} data={product} cart={true} />;
          })}
        </GridLayout>
      </div>
      {/* </GridItem> */}
      {/* </Grid> */}
    </>
  );
}
export default Shop;
