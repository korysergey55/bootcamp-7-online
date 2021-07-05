import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const AppRoutes = ({ routes = [], fallback = "...loading" }) => {
  return (
    <Suspense fallback={fallback}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
