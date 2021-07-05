import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

class ProductDetailsPage extends Component {
  state = {
    product: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    // console.log(id)
    axios
      .get(`https://amz-app.herokuapp.com/api/v1/products/${id}`)
      .then(({ data }) => this.setState({ product: data }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location.state ?? "/products");
  };

  render() {
    const { product } = this.state;

    if (!product) {
      return null;
    }

    const { name, thumbnail } = product;
    const { match, location } = this.props;
    const { url, path } = match;

    return (
      <div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700"
          onClick={this.handleGoBack}
        >
          Go Back
        </button>
        <img src={thumbnail} alt={name.ukr} />
        <h1>{name.ukr}</h1>

        <Link
          to={{
            pathname: `${url}/ingredients`,
            state: location.state,
          }}
        >
          Ingredients
        </Link>
        <Link
          to={{
            pathname: `${url}/mods`,
            state: location.state,
          }}
        >
          Mods
        </Link>

        <Switch>
          <Route
            path={`${path}/ingredients`}
            render={() => (
              <div>
                <h3>Hello Ingredients!</h3>
              </div>
            )}
          />
          <Route
            path={`${path}/mods`}
            render={() => (
              <div>
                <h3>Hello Mods!</h3>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default ProductDetailsPage;
