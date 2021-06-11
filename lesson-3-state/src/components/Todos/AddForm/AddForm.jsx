import React, { Component } from "react";

class AddForm extends Component {
  state = {
    term: "",
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.props)
    this.props.handleSubmit(this.state.term);
    this.setState({ term: '' })
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
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddForm;
