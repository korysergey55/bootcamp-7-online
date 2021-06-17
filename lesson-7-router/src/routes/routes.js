import { lazy } from "react";
import TestPage from "../pages/TestPage/TestPage";

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
    component: HomePage,
    name: "Home Page",
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage,
    name: "Search",
  },
  {
    path: "/products",
    exact: true,
    component: ProductsPage,
    name: "Products",
  },
  {
    path: "/products/:id",
    exact: false,
    component: ProductDetailsPage,
    name: null,
  },
  {
    path: "/test",
    exact: false,
    component: TestPage,
    name: "Test Page",
  },
];

export default ROUTES;
