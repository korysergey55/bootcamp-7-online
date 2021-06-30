import { Link } from "react-router-dom";

import routes from "routes/main.routes";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Foodoo
        </Link>

        <ul className="navbar-nav d-flex">
          {routes.map((link) =>
            link.label ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={link.path}
                >
                  {link.label}
                </Link>
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
