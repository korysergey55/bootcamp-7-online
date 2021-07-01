import { Component } from "react";

class ProductForm extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    enabled: true,
  };

  handleChange = (evt) => {
    const isCheckbox = evt.target.type === "checkbox";
    console.log(evt.target.checked);
    this.setState({
      [evt.target.name]: isCheckbox ? evt.target.checked : evt.target.value,
    });
  };

  render() {
    const { name, category, description, enabled } = this.state;
    return (
      <div className="container mx-auto">
        <form>
          <input
            name="name"
            className="flex"
            onChange={this.handleChange}
            placeholder="Product Name*"
            type="text"
            value={name}
          />
          <textarea
            name="description"
            className="flex"
            onChange={this.handleChange}
            value={description}
            placeholder="Product Description*"
          />

          <select name="category" onChange={this.handleChange} value={category}>
            <option value="pizza">Pizza</option>
            <option value="burgers">Burgers</option>
          </select>
          <input
            name="enabled"
            type="checkbox"
            onChange={this.handleChange}
            checked={enabled}
          />
        </form>
      </div>
    );
  }
}

export default ProductForm;
