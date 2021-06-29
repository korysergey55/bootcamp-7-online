import React, { Component } from "react";
import { connect } from "react-redux";

import { addCartItem, removeCartItem } from "redux/shopping-cart";
import { ProductsService } from "../../services/base-http.service";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import ProductsList from "../ProductsList/ProductsList";

class App extends Component {
  http = ProductsService.getInstance();

  state = {
    data: [],
    pager: null,
    error: null,
    product: null,
    // input: "",
  };

  async componentDidMount() {
    // console.log(this.http.accessToken)
    // console.log(this.http.accessToken)
    // console.log(this.http.accessToken)

    const { result, pager } = await this.http.getProducts({
      limits: 10,
      page: 1,
      maxPrice: 300,
    });

    this.setState({ data: result, pager });
  }

  selectProduct = (product) => {
    this.setState({ product });
  };

  handleChange = (evt) => {
    this.setState({ input: evt.target.value });
  };

  render() {
    const { data, product } = this.state;
    const { cartItems } = this.props;

    // const map = new Map();
    // for (const [index, cartItem] of cartItems.entries()) {
    //   map.set(index, cartItem);
    // }
    //
    // if (map.has(0)) {
    //   console.log([...map.values()])
    // }
    // const items = [1, 2, 1, 2, 2, 5, 5, 8, 8, 8];
    // const uniqueArray = [...new Set(items)];
    // const [it1, it2] = items;
    //console.log(rest)
    //console.log(it1, it2)
    // const map = new Map();
    // map.set(1, 1);
    // const newMap = { ...map };
    // newMap.get(1);
    // console.log(newMap);

    const items = new Set(["item", "item2", "item3", "item"]);
    const { item: hello, foo = 'bar', ...rest } = Object.fromEntries(items.entries());
    // console.log()
    console.log(rest)
    console.log(hello, foo);
    return (
      <div>
        <h3 className="mb-5">More Products</h3>
        {/*{this.state.input}*/}
        {/*<input*/}
        {/*  type="text"*/}
        {/*  onChange={this.handleChange}*/}
        {/*  value={this.state.input}*/}
        {/*/>*/}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-100 my-5">
            {product && (
              <>
                <img src={product.thumbnail} alt={product.name.ukr} />
                <h3>{product.name.ukr}</h3>
                <button type="button">Купить</button>
              </>
            )}
          </div>
          <div>
            <ProductsGrid
              cartItems={cartItems}
              addCartItem={this.props.addCartItem}
              removeCartItem={this.props.removeCartItem}
            />
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <ProductsList
            data={data}
            selectProduct={this.selectProduct}
            addCartItem={this.props.addCartItem}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatch = {
  addCartItem,
  removeCartItem,
};

export default connect(mapStateToProps, mapDispatch)(App);
