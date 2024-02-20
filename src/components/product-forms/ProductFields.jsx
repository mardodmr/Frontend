import { Button, Switch } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { tagOptions } from "./constValues";

function ProductFields({
  loading,
  initialValues,
  onSubmit,
  enableReinitialize,
}) {
  const animatedComponents = makeAnimated();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      {({ values }) => {
        return (
          <Form>
            <h1>Product Details:</h1>
            <div>
              <label htmlFor="productImg">Image URL:</label>
              <Field type="text" name="productImg" />
            </div>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field type="text" name="description" />
            </div>
            <div>
              <label htmlFor="tags">Tags:</label>
              <Field name="tags">
                {({ field, form }) => {
                  return (
                    <CreatableSelect
                      className="mb-3"
                      components={animatedComponents}
                      isMulti
                      isClearable
                      options={tagOptions}
                      name="tags"
                      onChange={(e) => {
                        var arr = e.map((index) => index.value);
                        form.setFieldValue(field.name, arr);
                      }}
                    />
                  );
                }}
              </Field>
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="text" name="price" />
            </div>
            <div>
              <label htmlFor="availability">Available:</label>
              <Field name="availability">
                {({ field, form }) => {
                  return (
                    <Switch
                      defaultChecked
                      onChange={(e) =>
                        form.setFieldValue(field.name, e.target.checked)
                      }
                    />
                  );
                }}
              </Field>
            </div>
            <div>
              <label htmlFor="isClothes">Clothing Item:</label>
              <Field name="isClothes">
                {({ field, form }) => {
                  return (
                    <Switch
                      defaultChecked
                      onChange={(e) =>
                        form.setFieldValue(field.name, e.target.checked)
                      }
                    />
                  );
                }}
              </Field>
            </div>

            {values.isClothes && (
              <div>
                <label htmlFor="size">Size:</label>
                <Field type="number" name="size" />
                <label htmlFor="color">Color:</label>
                <Field type="text" name="color" />
              </div>
            )}

            <Button
              type="submit"
              isLoading={loading}
              loadingText="Saving..."
              colorScheme="teal"
              variant="outline"
            >
              Save Changes
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductFields;
