import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

  }

  render() {
    return (
      <div className="search-box">
       <input
        type = "search"
        value = {this.state.term}
        placeholder = "Search"
        onChange = {event => this.search(event.target.value)}
       />
      </div>
    );
  }

  search(term) {
    this.setState({term});
    this.props.onSearch(term);
  }
};

export default SearchBox;
