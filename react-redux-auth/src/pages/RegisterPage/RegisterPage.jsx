import { Formik, Form, ErrorMessage, useField } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
import { register } from "../../redux/auth/auth.operations";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Напиши email будь добр!")
    .required("Поле обязательное!"),
  password: Yup.string().required("Поле обязательное!"),
});

export const FormControl = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);

  return (
    <div className="mt-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={
          meta.error && meta.touched ? "border border-1 text-red-500" : ""
        }
        {...field}
        {...props}
      />
      {/*<ErrorMessage name={field.name} component="p" className="text-red-500" />*/}
      {meta.error && meta.touched && <p className="text-red-500">{meta.error}</p>}
    </div>
  );
};

const RegisterPage = ({ register }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={register}
      >
        <Form>
          <FormControl name="email" type="email" label="Email" />
          <FormControl name="password" type="password" label="Password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchProps)(RegisterPage);
