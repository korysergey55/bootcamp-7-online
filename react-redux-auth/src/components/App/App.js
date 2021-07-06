import AppRoutes from "../../routes/AppRoutes";
import ROUTES from "../../routes/routes";
import NavbarNav from "../NavbarNav/NavbarNav";

// import SearchPage from "../../pages/SearchPage/SearchPage";
// import HomePage from "../../pages/HomePage/HomePage";
// import ProductsPage from "../../pages/ProductsPage/ProductsPage";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/auth/auth.operations";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        <NavbarNav routes={ROUTES} />
        <AppRoutes routes={ROUTES} fallback={<p>Loading...</p>} />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
