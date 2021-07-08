import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectIsAuth } from "../../redux/auth";
import { logout } from "../../redux/auth";

const NavbarNav = ({ routes = [], loginIn, logout }) => {
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
          <>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
          <li>
            <button
                type="button"
                className="bg-blue-500 rounded-md"
                onClick={logout}
            >
              Logout
            </button>
          </li>
          </>
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

export default connect(mapStateToProps, { logout })(NavbarNav);
