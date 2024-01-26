import { Show } from "@chakra-ui/react";
import instance from "api/instance";
import { CanceledError } from "axios";
import GridLayout from "components/GridLayout";
import ProductCard from "components/ProductCard";
import SidePanel from "components/SidePanel";
import { useEffect, useState } from "react";
import useProductStore from "../stores/store";

function Shop() {
  const { userType, category, searchWord } = useProductStore();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const controller = new AbortController();
      //Search for a product name
      if (searchWord) {
        instance
          .get(`/products/search/${searchWord}`, { signal: controller.signal })
          .then((res) => setProducts(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
        return;
      }

      // Products based on user type
      if (userType) {
        instance
          .get(`/products/${userType}`, { signal: controller.signal })
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
        return;
      }
      // Products based on Categories
      if (category === "new") {
        instance
          .get("/products", { signal: controller.signal })
          .then((res) => setProducts(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
      } else {
        instance
          .get(`/products/tags/${category}`, { signal: controller.signal })
          .then((res) => setProducts(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
      }
      return () => controller.abort();
    }
    fetchProducts();
  }, [userType, category, searchWord]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Show above="lg">
          <SidePanel />
        </Show>
        <GridLayout>
          {products?.map((product) => {
            return <ProductCard key={product._id} data={product} cart={true} />;
          })}
        </GridLayout>
      </div>
    </>
  );
}
export default Shop;
