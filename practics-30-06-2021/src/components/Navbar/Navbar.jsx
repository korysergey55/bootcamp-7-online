import { Link, NavLink } from "react-router-dom";

import routes from "routes/main.routes";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Foodoo
        </Link>

        <ul className="navbar-nav flex-row">
          {routes.map((link) =>
            link.label ? (
              <li className="nav-item px-3" key={link.path}>
                <NavLink
                  exact={link.exact}
                  className="nav-link"
                  aria-current="page"
                  activeClassName="active"
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ) : null
          )}
        </ul>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
