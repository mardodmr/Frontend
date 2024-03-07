import apiInstance from "api/api-instance";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiInstance
      .get(endpoint, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useData;
