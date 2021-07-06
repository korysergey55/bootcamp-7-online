import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { selectIsAuth } from "../../redux/auth/auth.selectors";

const PublicRoute = ({
  path,
  component: Component,
  exact,
  restricted,
  loginIn,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) =>
        loginIn && restricted ? (
          <Redirect to="/profile" />
        ) : (
          <Component {...routerProps} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  loginIn: selectIsAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
