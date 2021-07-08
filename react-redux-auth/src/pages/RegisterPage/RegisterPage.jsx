import { useField } from "formik";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { register } from "../../redux/auth";
import AuthForm from "../../components/AuthForm";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Напиши email будь добр!")
    .required("Поле обязательное!"),
  password: Yup.string()
    .required()
    .min(3, "Must be exactly 3 digits")
    .max(10, "Must be exactly 10 digits"),
  username: Yup.string().required("Поле обязательное!"),
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
      {meta.error && meta.touched && (
        <p className="text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

const dataSource = [
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    name: "username",
    type: "text",
    label: "User Name",
  },
];

const RegisterPage = () => {
  const dispatch = useDispatch();
  const signUp = (values) => {
    dispatch(register(values));
  };


  return (
    <div>
      <AuthForm
        initialValues={{
          email: "",
          password: "",
          username: "",
          redirectUrl: window.location.href,
        }}
        dataSource={dataSource}
        validationSchema={validationSchema}
        submitAction={signUp}
        submitText="Register"
      />
    </div>
  );
};

// const mapStateToProps = (state) => ({});
//
// const mapDispatchProps = {
//   register,
// };
//
// export default connect(mapStateToProps, mapDispatchProps)(RegisterPage);

export default RegisterPage;
