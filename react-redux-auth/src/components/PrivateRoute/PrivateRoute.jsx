import { Redirect, Route } from "react-router-dom";
import useAuth from "../../lib/use-auth";


const PrivateRoute = ({ path, component: Component, exact }) => {
  const loginIn = useAuth()
  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) =>
        loginIn ? <Component {...routerProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
