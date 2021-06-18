import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchForm extends Component {
  static propTypes = {
    searchProducts: PropTypes.func.isRequired,
  };

  state = {
    search: "",
  };

    handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.searchProducts(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <form className="flex" onSubmit={this.handleSubmit}>
        <input
          name="search"
          className="w-75"
          onChange={this.handleChange}
          type="text"
          value={search}
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 px-10 hover:bg-blue-700 text-white rounded-md w-25"
        >
          Поехали!
        </button>
      </form>
    );
  }
}

export default SearchForm;
