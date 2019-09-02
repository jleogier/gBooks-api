import React, { Component } from "react";
import Header from "../header/header";
import Search from "../search/search";
import Filter from "../filter/filter";
import Booklist from "../booklist/booklist";

class BooklistApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      results: [],
      error: "",
      filter: ""
    };
  }

  static defaultProps = {
    search: null,
    results: [
      {
        volumeInfo: {
          title: "",
          authors: [""],
          description: ""
        },
        saleInfo: {
          listPrice: {
            amount: null
          }
        }
      }
    ],
    error: "",
    filter: ""
  };

  updateSearch(value) {
    this.setState({ search: value });
  }

  updateFilter(filter) {
    this.setState({ filter: filter });
  }

  componentDidUpdate(prevProps, prevState) {
    const searchTerm = this.state.search;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCw3xcRULOpA27neawrCPEYbW9VPSlyDJ0&maxResults=5`;
    if (searchTerm !== prevState.search) {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error("Something went wrong, please try again later.");
          }
          return res;
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data.items,
            error: null
          });
        })
        .catch(err => {
          this.setState({
            error: err.message
          });
        });
      console.log(this.state.results);
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="search">
          <Search
            currentSearch={this.state.search}
            handleSearch={value => this.updateSearch(value)}
          />
        </div>
        <div className="filter">
          <Filter handleFilter={filter => this.updateFilter(filter)} />
        </div>
        <div className="booklist">
          <Booklist results={this.state.results} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default BooklistApp;