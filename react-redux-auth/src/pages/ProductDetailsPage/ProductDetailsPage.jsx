import React, {  useEffect, useState } from "react";
import axios from "axios";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const history = useHistory();
  // const { match } = this.props;
  const { url, path } = useRouteMatch();
  const { id } = useParams();
    // console.log(params)
  // state = {
  //   product: null,
  // };

  // componentDidMount() {
  //   const { match } = this.props;
  //   const { id } = match.params;
  //   // console.log(id)
  //   axios
  //     .get(`https://amz-app.herokuapp.com/api/v1/products/${id}`)
  //     .then(({ data }) => this.setState({ product: data }));
  // }

  useEffect(() => {
    axios
      .get(`https://amz-app.herokuapp.com/api/v1/products/${id}`)
      .then(({ data }) => setProduct(data));
  }, [id]);

  const handleGoBack = () => {
    // const { location, history } = this.props;
    history.push(location.state ?? "/products");
  };

  // const { product } = this.state;

  if (!product) {
    return null;
  }

  const { name, thumbnail } = product;

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700"
        onClick={handleGoBack}
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
};

export default ProductDetailsPage;
