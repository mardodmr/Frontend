import instance from "api/instance";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useData = (endpoint) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    instance
      .get(endpoint, { signal: controller.signal })
      .then((res) => setProducts(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { products, error };
};

export default useData;
