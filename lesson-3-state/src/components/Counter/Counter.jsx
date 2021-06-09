import { Component } from "react";

const Increment = ({ handleIncrement }) => (
  <button className="btn btn-primary" onClick={handleIncrement}>
    +
  </button>
);

const Decrement = ({ handleDecrement }) => (
  <button className="btn btn-danger" onClick={handleDecrement}>
    -
  </button>
);

const Value = ({ value }) => <span>{value}</span>

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  //
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }
  state = {
    // foo: 'bar',
    value: 0,
  };

  handleIncrement = (evt) => {
    console.log("click");
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    // value: 5 -> + 1 - 1
    // value: prevState ->
    // value:  prevSTate ->
    // value:  ->
    // value:  ->
    // value:  ->
    // value:  ->

    // ===> state

    // console.log("value", this.state.value);
    // this.setState((prevState) => ({ value: prevState.value + 1 }));
    // console.log("value", this.state.value);
    // this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecrement = (evt) => {
    console.log("click");
    this.setState((prevState) => ({ value: prevState.value - 1 }));
    // this.setState({ value: this.state.value - 1 })
    // this.setState({ value: this.state.value - 1 })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center">
            {/*<button className="btn btn-danger" onClick={this.handleDecrement}>*/}
            {/*  -*/}
            {/*</button>*/}
            <Decrement handleDecrement={this.handleDecrement} />
            {/*<span>{this.state.value}</span>*/}
            <Value value={this.state.value}/>
            <Increment handleIncrement={this.handleIncrement} />
            {/*<button className="btn btn-primary" onClick={this.handleIncrement}>*/}
            {/*  +*/}
            {/*</button>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
