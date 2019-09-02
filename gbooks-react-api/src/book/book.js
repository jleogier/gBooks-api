import React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.results);
    const books = this.props.results.map(book => {
      return (
        <li className="book-result">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <ul>
            <li>Author: {book.volumeInfo.authors}</li>
            <li>Price: {book.saleInfo.listPrice.amount}</li>
            <li>{book.volumeInfo.description}</li>
          </ul>
        </li>
      );
    });
    return (
      <div>
        <ul className="booklist">{books}</ul>
      </div>
    );
  }
}