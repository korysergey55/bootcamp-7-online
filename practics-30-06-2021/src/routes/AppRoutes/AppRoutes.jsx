import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

const AppRoutes = ({ routes, fallback = "...Loading" }) => {
  return (
    <Suspense fallback={fallback}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

AppRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.node.isRequired,
      label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.any.isRequired,
      ]),
    })
  ),
  fallback: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
};

export default AppRoutes;
