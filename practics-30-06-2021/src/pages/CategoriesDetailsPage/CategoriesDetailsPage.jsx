import React, { Component } from "react";
import RestaurantsService from "../../service/restaraunts.service";
import { Link } from "react-router-dom";

class CategoriesDetailsPage extends Component {
  service = RestaurantsService.getInstance();

  state = {
    products: [],
    categories: [],
    restaurants: [],
    category: null,
    loading: false,
    error: null,
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
  //     const { data } = await this.service.getCategoriesDetails(
  //         this.props.match.params.categoryId
  //     );
  //
  //     this.setState(data);
  //   }
  // }

  async componentDidMount() {
    // const { data } = await this.service.getCategoriesDetails(
    //   this.props.match.params.categoryId
    // );
    //
    // this.setState(data);

    // console.log()

    this.fetchCategories();
  }

  fetchCategories = async (categoryId) => {
    const { data } = await this.service.getCategoriesDetails(
      categoryId ?? this.props.match.params.categoryId
    );

    this.setState(data);
  };

  handleChangeCategory = (evt) => {
    const { history, location } = this.props;
    const pathArr = location.pathname.split("/");
    const newPathArr = pathArr.map((item, idx) =>
      idx === 3 ? evt.target.value : item
    );
    // console.log(pathArr)
    // console.log()

    // console.log(new Set(pathArr))

    history.push(newPathArr.join("/"));
    this.fetchCategories(evt.target.value);
  };

  render() {
    const { category, products, categories } = this.state;
    const { categoryId } = this.props.match.params;

    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          {category && <h1>{category.name?.ukr}</h1>}

          <select onChange={this.handleChangeCategory} value={categoryId}>
            {categories.map((cat) => (
              <option value={cat._id} key={cat._id}>
                {cat.name.ukr}
              </option>
            ))}
          </select>
        </div>
        <div className="row mt-5">
          {products.map((item) => (
            <div className="col row-col-3">
              <div className="card" key={item._id}>
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.name.ukr}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name.ukr}</h5>
                  <p className="card-text">{item.description.ukr}</p>
                  <Link to={`/product/${item._id}`} className="btn btn-primary">
                    Go to Shopping
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoriesDetailsPage;
