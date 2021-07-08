import { useDispatch} from "react-redux";
import * as Yup from "yup";

import { login } from "../../redux/auth";
import AuthForm from "../../components/AuthForm";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Напиши email будь добр!")
    .required("Поле обязательное!"),
  password: Yup.string().required("Поле обязательное!"),
});

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
];

const LoginPage = () => {
  const dispatch = useDispatch();
  const signIn = (userCredentials) => {
    dispatch(login(userCredentials));
  }

  return (
    <div>
      <AuthForm
        initialValues={{
          email: "",
          password: "",
        }}
        dataSource={dataSource}
        validationSchema={validationSchema}
        submitAction={signIn}
        submitText="Login"
      />
    </div>
  );
};

//
// const mapStateToProps = (state) => ({});
//
// const mapDispatchProps = {
//   login,
// };
//
// export default connect(mapStateToProps, mapDispatchProps)(LoginPage);

export default LoginPage;