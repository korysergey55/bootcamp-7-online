import { Form, Formik } from "formik";
import { FormControl } from "../RegisterPage/RegisterPage";
import {connect} from "react-redux";
import * as Yup from "yup";

import {login} from "../../redux/auth/auth.operations";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Напиши email будь добр!")
        .required("Поле обязательное!"),
    password: Yup.string().required("Поле обязательное!"),
});


const LoginPage = ({ login }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            login(values);
        }}
      >
        <Form>
          <FormControl name="email" type="email" label="Email" />
          <FormControl name="password" type="password" label="Password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchProps = {
    login,
};


export default connect(mapStateToProps, mapDispatchProps)(LoginPage);