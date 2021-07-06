import { memo, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = ({ routes = [], fallback = "...loading" }) => {
  return (
    <Suspense fallback={fallback}>
      <Switch>
        {routes.map((route) =>
          route.private ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          )
        )}
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </Suspense>
  );
};

export default memo(AppRoutes);
