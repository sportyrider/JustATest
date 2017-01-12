import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: 'Search !!!',
    });
    
  }

  render() {
    return (
      <div>
        <h1> {this.state.name}</h1>
      </div>
    );
  }
}

export default Search;