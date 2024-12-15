import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import buttonStyle from "constants/chakraBlackButtonProps";

function ProfileFields({
  loading,
  initialValues,
  onSubmit,
  enableReinitialize,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <Field type="text" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <Field type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="phone">Syrian Phone Number</label>
          <br />
          <Field type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="governorate">Governorate</label>
          <br />
          <Field type="text" name="governorate" />
        </div>
        <div>
          <label htmlFor="socials">Instagram Link</label>
          <br />
          <Field type="text" name="socials" />
        </div>
        <div>
          <label htmlFor="cashId">Syriatel Cash ID</label>
          <br />
          <Field type="number" name="cashId" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <br />
          <Field type="text" name="address" />
        </div>
        <div style={{ margin: 0, display: "flex", justifyContent: "center" }}>
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
    </Formik>
  );
}

export default ProfileFields;
