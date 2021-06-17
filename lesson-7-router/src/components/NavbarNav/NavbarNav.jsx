import React from "react";
import { NavLink } from "react-router-dom";

const NavbarNav = ({ routes = [] }) => {
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
    </ul>
  );
};

export default NavbarNav;
