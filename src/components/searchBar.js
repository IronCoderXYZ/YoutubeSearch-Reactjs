import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    const { term } = this.state;

    return (
      <div className='search-bar'>
        <input
          value={term}
          onChange={event => this.onTermChange(event.target.value)} />
      </div>
    );
  }

  onTermChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

};

export default SearchBar;
