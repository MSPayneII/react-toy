import React, { Component } from "react";

class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  handlePalindromeCheck = (str) => {
    let reverseStr = str.split("").reverse().join("");

    if (str === reverseStr) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  };

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handlePalindromeCheck(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input type="text" className="inputLine" onChange={this.onChange} />
        <button className="confirmationButton" onClick={this.onSubmit}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
