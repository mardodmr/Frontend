import { useEffect, useState } from "react";
import { Show } from "@chakra-ui/react";
import SidePanel from "components/shop/SidePanel";
import GridLayout from "components/layouts/GridLayout";
import ProductCard from "components/products/ProductCard";
import apiInstance from "api/api-instance";
import useProductStore from "../../zustand-stores/filter-store";
import { CanceledError } from "axios";

function Shop() {
  const { userType, category, searchWord } = useProductStore();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const controller = new AbortController();
      //Search for a product name
      if (searchWord) {
        apiInstance
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
        apiInstance
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
        apiInstance
          .get("/products", { signal: controller.signal })
          .then((res) => setProducts(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
      } else {
        apiInstance
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
    <div
      style={{
        width: "75%",
        display: "flex",
        gap: "1rem",
        margin: "auto",
      }}
    >
      <Show above="lg">
        <SidePanel />
      </Show>
      <GridLayout>
        {products?.map((product) => {
          return <ProductCard key={product._id} data={product} cart={true} />;
        })}
      </GridLayout>
    </div>
  );
}
export default Shop;
