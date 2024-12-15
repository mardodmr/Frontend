import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import React from "react";

function LoginFields({ loading, initialValues, onSubmit, buttonText }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <h1>Type your credentials:</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" />
        </div>
        <Button
          type="submit"
          isLoading={loading}
          loadingText="Logging..."
          colorScheme="teal"
          variant="outline"
        >
          {buttonText}
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginFields;
