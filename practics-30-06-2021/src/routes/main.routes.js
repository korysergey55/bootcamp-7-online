import { lazy } from 'react';

const MainRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('pages/HomePage')),
        label: "Home",
    },    {
        path: '/categories',
        exact: true,
        component: lazy(() => import('pages/CategoriesPage')),
        label: 'Categories',
    },    {
        path: '/restaurants',
        exact: true,
        component: lazy(() => import('pages/RestarauntsPage')),
        label: "Restaurants",
    },    {
        path: '/products',
        exact: true,
        component: lazy(() => import('pages/ProductsPage')),
        label: "Products",
    },
]


export default MainRoutes;