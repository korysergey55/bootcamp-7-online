import AppRoutes from "../../routes/AppRoutes";
import ROUTES from "../../routes/routes";
import NavbarNav from "../NavbarNav/NavbarNav";

// import SearchPage from "../../pages/SearchPage/SearchPage";
// import HomePage from "../../pages/HomePage/HomePage";
// import ProductsPage from "../../pages/ProductsPage/ProductsPage";

const App = () => {
  return (
    <div>
      <NavbarNav routes={ROUTES} />
      <AppRoutes routes={ROUTES} fallback={<p>Loading...</p>} />
    </div>
  );
};

export default App;
