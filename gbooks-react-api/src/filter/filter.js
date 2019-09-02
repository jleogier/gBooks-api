import React from "react";
// import "./filter.css";

export default class Filter extends React.Component {
  render() {
    return (
      <form>
        <label>Print Type:</label>
        <select id="print-type" name="print-type">
          <option value="None">Select one...</option>
        </select>
        <label>Book Type:</label>
        <select id="book-type" name="book-type">
          <option value="None">Select one...</option>
        </select>
      </form>
    );
  }
}