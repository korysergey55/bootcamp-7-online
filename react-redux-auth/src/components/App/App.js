import AppRoutes from "../../routes/AppRoutes";
import ROUTES from "../../routes/routes";
import NavbarNav from "../NavbarNav/NavbarNav";

// import SearchPage from "../../pages/SearchPage/SearchPage";
// import HomePage from "../../pages/HomePage/HomePage";
// import ProductsPage from "../../pages/ProductsPage/ProductsPage";

import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <NavbarNav routes={ROUTES} />
      <AppRoutes routes={ROUTES} fallback={<p>Loading...</p>} />
    </div>
  );
};

// export default connect(null, { getCurrentUser })(App);

export default App;
