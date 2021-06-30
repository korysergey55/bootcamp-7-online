import React, { Component } from "react";
import RestaurantsService from "../../service/restaraunts.service";
import { Link } from "react-router-dom";

class RestarauntsDetailsPage extends Component {
  restaurantsService = RestaurantsService.getInstance();

  state = {
    error: null,
    restaurant: null,
    restaurants: [],
    categories: [],
  };

  async componentDidMount() {
    const { restId } = this.props.match.params;
    try {
      const { data } = await this.restaurantsService.getRestaurantDetails(
        restId
      );
      this.setState(data);
    } catch (error) {
      this.setState({ error: error?.response?.data });
    }
  }

  render() {
    const { categories } = this.state;
    const { url } = this.props.match;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            {categories.map((item) => (
              <div className="card">
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.name.ukr}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name.ukr}</h5>
                  <p className="card-text">{item.description.ukr}</p>
                  <Link
                    to={`${url}/${item._id}`}
                    className="btn btn-primary"
                  >
                    Go to Shopping
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RestarauntsDetailsPage;
