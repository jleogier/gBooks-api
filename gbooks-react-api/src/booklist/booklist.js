import React from "react";
// import "./booklist.css";
import Book from "../book/book";

export default function Booklist(props) {
  return (
    <div className="booklist">
      <Book results={props.results} filter={props.filter} />
    </div>
  );
}