import React, { Component } from "react";

class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unfilteredArray: [
        "Burgers",
        "Pizza",
        "Tacos",
        "Gumbo",
        "Chips",
        "Cake",
        "Pie",
        "Chicken Wings",
        "Steak",
        "Taco Salad",
        "Chicken Tenders",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  handleStrFilter = (arr) => {
    let arrLowerCaseItems = arr.map((food) => food.toLowerCase());

    let localStrArray = arrLowerCaseItems.filter((arrFoodItem) =>
      arrFoodItem.includes(this.state.userInput.toLowerCase())
    );
    this.setState({ filteredArray: [...localStrArray] });
  };

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handleStrFilter(this.state.unfilteredArray);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Food: {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
        <input
          type="text"
          className="inputLine"
          placeholder="Enter string filter here"
          value={this.state.userInput}
          onChange={this.onChange}
        />
        <button className="confirmationButton" onClick={this.onSubmit}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
