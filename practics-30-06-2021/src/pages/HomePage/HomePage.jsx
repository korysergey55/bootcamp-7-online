import React from "react";
import RestaurantsService from "../../service/restaraunts.service";
import {Link} from "react-router-dom";

class HomePage extends React.Component {
  restaurantsService = RestaurantsService.getInstance();

  state = {
    restaurants: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await this.restaurantsService.getRestaurants();
      const { result } = data;
      this.setState({ restaurants: result });
    } catch (error) {
      this.setState({ error: error?.response?.data });
    }
  }

  render() {
    const { restaurants} = this.state;

    return (
      <div className="container">
        <h1>Restaurants</h1>

        <div className="row">
          <div className="col-4">
            {restaurants.map((item) => (
              <div className="card">
                <img
                  src={item.logotype}
                  className="card-img-top"
                  alt={item.name.ukr}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name.ukr}</h5>
                  <p className="card-text">{item.description.ukr}</p>
                  <Link to={`/restaurants/${item._id}`} className="btn btn-primary">Go to Shopping</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
