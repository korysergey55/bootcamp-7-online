import React from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../../pages/RegisterPage/RegisterPage";

const AuthForm = ({
  initialValues,
  submitAction,
  submitText,
  validationSchema,
  dataSource = [],
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitAction}
    >
      <Form>
        {dataSource.map((input) => (
          <FormControl
            name={input.name}
            type={input.type}
            label={input.label}
          />
        ))}
        <button type="submit">{submitText}</button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
