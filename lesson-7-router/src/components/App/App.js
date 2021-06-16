import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import SearchPage from "../../pages/SearchPage/SearchPage";
import HomePage from "../../pages/HomePage/HomePage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";

const App = () => {
    return (
        <div>
            <ul className="flex gap-x-2 my-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>

            {/*<SearchPage/>*/}
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/products" component={ProductsPage}/>
                <Route path="/products/:id" component={ProductDetailsPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route render={() => <h3>Not Found</h3>}/>
            </Switch>
        </div>
    );
};

export default App;