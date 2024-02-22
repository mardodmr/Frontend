import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

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
        <h1>Update your info:</h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">last name:</label>
          <Field type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="phone">Syrian phone number:</label>
          <Field type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="governorate">Governorate:</label>
          <Field type="text" name="governorate" />
        </div>
        <div>
          <label htmlFor="socials">social media links:</label>
          <Field type="text" name="socials" />
        </div>
        <div>
          <label htmlFor="cashId">Syriatel Cash ID:</label>
          <Field type="number" name="cashId" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Field type="text" name="address" />
        </div>
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
    </Formik>
  );
}

export default ProfileFields;
