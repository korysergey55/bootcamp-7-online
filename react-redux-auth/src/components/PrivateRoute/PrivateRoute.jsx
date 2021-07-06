import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { selectIsAuth } from "../../redux/auth";

const PrivateRoute = ({ path, component: Component, exact, loginIn }) => {
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

const mapStateToProps = (state) => ({
  loginIn: selectIsAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
