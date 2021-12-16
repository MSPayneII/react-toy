import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: [
        {
          name: "Michael P",
          title: "Student",
          age: 35,
        },
        {
          name: "Jill B",
          title: "Web Developer",
          age: 32,
        },
        {
          name: "Mary Q",
          hairColor: "Red",
        },
      ],
      filteredArray: [],
      userInput: "",
    };
  }

  handleObjFilter = (arr) => {
    let localfilteredArr = arr.filter((obj) =>
      obj.hasOwnProperty(this.state.userInput)
    );

    this.setState({ filteredArray: [...localfilteredArr] });
  };

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handleObjFilter(this.state.unFilteredArray);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          type="text"
          className="inputLine"
          placeholder="Enter filter property here"
          onChange={this.onChange}
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={this.onSubmit}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
