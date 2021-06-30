import { lazy } from "react";

const MainRoutes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("pages/HomePage")),
    label: "Home",
  },
  {
    path: "/categories",
    exact: true,
    component: lazy(() => import("pages/CategoriesPage")),
    label: "Categories",
  },
  {
    path: "/restaurants",
    exact: true,
    component: lazy(() => import("pages/RestarauntsPage")),
    label: "Restaurants",
  },
  {
    path: "/restaurants/:restId/",
    exact: true,
    component: lazy(() => import("pages/RestarauntsDetailsPage")),
    label: null,
  },
  {
    path: "/restaurants/:restId/:categoryId/",
    exact: true,
    component: lazy(() => import("pages/CategoriesDetailsPage")),
    label: null,
  },
  {
    path: "/products",
    exact: true,
    component: lazy(() => import("pages/ProductsPage")),
    label: "Products",
  },
];

export default MainRoutes;
