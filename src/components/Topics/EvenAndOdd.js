import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleArraySplit = (str) => {
    let strArr = str.split("");
    let localEven = [];
    let localOdd = [];

    strArr.forEach((element) => {
      let num = Number(element);

      if (Number.isInteger(num)) {
        if (num % 2 === 0) {
          localEven.push(num);
        } else {
          localOdd.push(num);
        }
      }
      // will create additional else statement to test if the element is letter later
    });

    this.setState({
      evenArray: [...localEven],
      oddArray: [...localOdd],
    });
  };

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handleArraySplit(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          type="text"
          name="text"
          placeholder="Enter numbers here"
          className="inputLine"
          value={this.state.userInput}
          onChange={this.onChange}
        />
        <button className="confirmationButton" onClick={this.onSubmit}>
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray, null, 10)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
