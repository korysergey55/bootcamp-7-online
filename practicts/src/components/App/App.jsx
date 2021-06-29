import React, { Component } from "react";
import { connect } from "react-redux";

import { addCartItem, removeCartItem } from "redux/shopping-cart";
import BaseHttpService from "../../services/base-http.service";

class App extends Component {
  http = BaseHttpService.getInstance();

  state = {
    data: [],
    pager: null,
    error: null,
    product: null,
    // input: "",
  };

  async componentDidMount() {
    const { data } = await this.http.get(`https://amz-app.herokuapp.com/api/v1/products`);
    const { result, pager } = await data;
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
            <ul>
              {cartItems.map((item) => (
                <li className="flex gap-2" key={item.id}>
                  <img src={item.thumbnail} alt={item.name.ukr} />
                  <span>{item.name.ukr}</span>
                  <span>price: {item.price}</span>
                  <span>quantity: {item.quantity}</span>
                  <span>total: {item.total}</span>
                  <button
                    className="bg-yellow-500 px-2 py-2"
                    onClick={() => this.props.removeCartItem(item)}
                  >
                    -
                  </button>
                  <button
                    className="bg-blue-500 px-2 py-2"
                    onClick={() => this.props.addCartItem(item)}
                  >
                    +
                  </button>
                  <button className="bg-red-500 px-2 py-2">Удалить</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <ul className="grid grid-cols-4 gap-5">
            {data.map((item) => (
              <li key={item._id}>
                <h3 onClick={() => this.selectProduct(item)}>
                  {item.name.ukr}
                </h3>
                <button
                  className="bg-blue-500 px-2 py-2"
                  type="button"
                  onClick={() => this.props.addCartItem(item)}
                >
                  Купить
                </button>
              </li>
            ))}
          </ul>
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
