import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  handleSummation = (num1, num2) => {
    let localSum = Number(num1) + Number(num2);
    this.setState({ sum: localSum });
  };

  onChange = (event) => {
    event.target.name === "input1"
      ? this.setState({ number1: event.target.value })
      : this.setState({ number2: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handleSummation(this.state.number1, this.state.number2);
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          name="input1"
          className="inputLine"
          onChange={this.onChange}
        />
        <input
          type="number"
          name="input2"
          className="inputLine"
          onChange={this.onChange}
        />
        <button className="confirmationButton" onClick={this.onSubmit}>
          Sum
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
