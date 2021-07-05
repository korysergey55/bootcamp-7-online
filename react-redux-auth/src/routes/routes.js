import { lazy } from "react";
import TestPage from "../pages/TestPage/TestPage";
import RegisterPage from "../pages/RegisterPage";
import Profile from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

const HomePage = lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const SearchPage = lazy(() =>
  import("../pages/SearchPage/SearchPage" /* webpackChunkName: "search-page" */)
);

const ProductsPage = lazy(() =>
  import(
    "../pages/ProductsPage/ProductsPage" /* webpackChunkName: "products-page" */
  )
);
const ProductDetailsPage = lazy(() =>
  import(
    "../pages/ProductDetailsPage/ProductDetailsPage" /* webpackChunkName: "product-details-page" */
  )
);

const ROUTES = [
  {
    path: "/",
    exact: true,
    private: false,
    restricted: false,
    component: HomePage,
    name: "Home Page",
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
    private: false,
    restricted: true,
    name: null,
  },
  {
    path: "/register",
    exact: true,
    component: RegisterPage,
    name: null,
    private: false,
    restricted: true,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    name: null,
    private: true,
    restricted: false,
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage,
    name: "Search",
    private: false,
    restricted: false,
  },
  {
    path: "/products",
    exact: true,
    component: ProductsPage,
    name: "Products",
    private: false,
    restricted: false,
  },
  {
    path: "/products/:id",
    exact: false,
    component: ProductDetailsPage,
    name: null,
    private: false,
    restricted: false,
  },
  {
    path: "/test",
    exact: false,
    component: TestPage,
    name: "Test Page",
    private: false,
    restricted: false,
  },
];

export default ROUTES;
