import { getProduct, updateProduct } from "api/products";
import FormStyleWrapper from "components/layouts/FormStyleWrapper";
import { useEffect, useState } from "react";
import ProductFields from "./ProductFields";
import initialValues from "./initialValues";

function UpdateProduct({ id }) {
  const [serverValues, setServerValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    updateProduct(id, values).then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getProduct(id).then((data) => setServerValues(data));
  }, [id]);

  return (
    <FormStyleWrapper>
      <ProductFields
        loading={loading}
        initialValues={serverValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
      />
    </FormStyleWrapper>
  );
}

export default UpdateProduct;
