import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  // state = {
  //   products: [],
  // };

  // componentDidMount() {
  //   axios
  //     .get(`https://amz-app.herokuapp.com/api/v1/products`)
  //     .then(({ data }) => this.setState({ products: data.result }));
  // }

  useEffect(() => {
    axios
      .get(`https://amz-app.herokuapp.com/api/v1/products`)
      .then(({ data }) => setProducts(data.result));
  }, []);

  return (
    <div>
      <h3>Products Page</h3>
      <ul>
        {products.map((item) => (
          <li key={item._id}>
            <Link
              className="bg-blue-500 hover:bg-blue-700"
              to={{
                pathname: `/products/${item._id}`,
                state: location,
              }}
            >
              {item?.name?.ukr}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
