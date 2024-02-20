import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductFields from "./ProductFields";
import { initialValues } from "./constValues";
import { getProduct, updateProduct } from "api/products";

function UpdateProduct() {
  const [serverValues, setServerValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state: id } = useLocation();

  const onSubmit = (values) => {
    setLoading(true);
    updateProduct(id, values).then(() => {
      setLoading(false);
      navigate("/products", { replace: true });
    });
  };

  useEffect(() => {
    getProduct(id).then((data) => setServerValues(data));
  }, []);

  return (
    <ProductFields
      loading={loading}
      initialValues={serverValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
    />
  );
}

export default UpdateProduct;
