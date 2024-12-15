import { Button, Switch } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import tagOptions from "constants/tagOptions";
import buttonStyle from "constants/chakraBlackButtonProps";

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
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" />
            </div>
            <div>
              <label htmlFor="productImg">Image Link</label>
              <Field type="text" name="productImg" />
            </div>
            <div>
              <label style={{ marginBottom: "0px" }} id="tags" htmlFor="tags">
                Tags
              </label>
              <Field className="tags" name="tags">
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
              <label htmlFor="price">Price</label>
              <Field type="text" name="price" />
            </div>
            <div>
              <label htmlFor="isAvailable">Available</label>
              <Field name="isAvailable">
                {({ field, form }) => {
                  return (
                    <Switch
                      marginLeft={"10px"}
                      marginTop={"5px"}
                      isChecked={form.values.isAvailable}
                      onChange={(e) =>
                        form.setFieldValue(field.name, e.target.checked)
                      }
                    />
                  );
                }}
              </Field>
            </div>
            <div>
              <label htmlFor="isClothes">Clothing Item</label>
              <Field name="isClothes">
                {({ field, form }) => {
                  return (
                    <Switch
                      marginLeft={"10px"}
                      marginTop={"5px"}
                      isChecked={form.values.isClothes}
                      onChange={(e) => {
                        form.setFieldValue(field.name, e.target.checked);
                      }}
                    />
                  );
                }}
              </Field>
            </div>

            {values.isClothes && (
              <>
                <div>
                  <label htmlFor="size">Size</label>
                  <Field type="text" name="size" />
                </div>
                <div>
                  <label htmlFor="color">Color</label>
                  <Field type="text" name="color" />
                </div>
              </>
            )}
            <div
              style={{ margin: 0, display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Saving..."
                {...buttonStyle}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductFields;
