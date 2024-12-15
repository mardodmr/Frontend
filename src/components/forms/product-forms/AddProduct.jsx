import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "api/products";
import ProductFields from "./ProductFields";
import initialValues from "./initialValues";
import FormStyleWrapper from "components/layouts/FormStyleWrapper";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("submitting these values", values);
    setLoading(true);
    createProduct(values).then(() => {
      setLoading(false);
      navigate("/products", { replace: true });
    });
  };

  return (
    <FormStyleWrapper>
      <ProductFields
        loading={loading}
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    </FormStyleWrapper>
  );
}

export default AddProduct;
