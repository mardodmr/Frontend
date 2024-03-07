import apiInstance from "api/api-instance";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useMyOrders = (status) => {
  const urlEndpoint = "/orders";

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiInstance
      .get(`${urlEndpoint}/purchased/${status}`, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [status]);

  return { data, error, loading };
};

export default useMyOrders;
