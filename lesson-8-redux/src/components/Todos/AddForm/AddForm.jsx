import React, { Component } from "react";
import PropTypes from "prop-types";

class AddForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  // typeof handleSubmit !== 'func' ? 'error': '';
  state = {
    term: "",
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    // console.log(this.props)
    this.props.handleSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="term"
          type="text"
          onChange={this.handleChange}
          value={this.state.term}
        />
        {/*<input*/}
        {/*  name="number"*/}
        {/*  type="text"*/}
        {/*  onChange={this.handleChange}*/}
        {/*  value={this.state.number}*/}
        {/*/>*/}
        <button type="submit" className="px-3 py-3 bg-blue-600 text-white rounded-md ml-2">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
