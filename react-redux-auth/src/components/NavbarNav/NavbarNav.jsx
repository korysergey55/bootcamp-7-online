import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth.selectors";

const NavbarNav = ({ routes = [], loginIn }) => {
  return (
    <ul className="flex gap-x-2 my-5">
      {routes.map((route) =>
        route.name ? (
          <li key={route.path}>
            <NavLink
              exact={route.exact}
              to={route.path}
              activeClassName="bg-blue-500"
            >
              {route.name}
            </NavLink>
          </li>
        ) : null
      )}
      {loginIn ? (
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      ) : (
        <>
          <NavLink to={"/login"} activeClassName="bg-blue-500">
            Login
          </NavLink>
          <NavLink to={"/register"} activeClassName="bg-blue-500">
            Register
          </NavLink>
        </>
      )}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  loginIn: selectIsAuth(state),
});

export default connect(mapStateToProps)(NavbarNav);
