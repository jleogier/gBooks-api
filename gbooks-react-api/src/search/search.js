import React from "react";
// import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <form>
        <label>Search:</label>
        <input
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
          placeholder="Search a book title/author"
        ></input>
        <button
          className="searchButton"
          onClick={e => {
            e.preventDefault();
            this.props.handleSearch(this.state.term);
            this.setState({ term: "" });
          }}
        >
          Search
        </button>
      </form>
    );
  }
}