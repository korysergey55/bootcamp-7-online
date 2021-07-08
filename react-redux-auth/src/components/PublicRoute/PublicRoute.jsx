import React from "react";
import { Route, Redirect } from "react-router-dom";

import useAuth from "../../lib/use-auth";

const PublicRoute = ({ path, component: Component, exact, restricted }) => {
  const loginIn = useAuth();

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

export default PublicRoute;
