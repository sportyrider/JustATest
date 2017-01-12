import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: 'Nav !!!',
    });
  }

  render() {
    return (
      <div>
        <Link to="/" activeClassName="active">Home</Link> {' '}
        <Link to="/search" activeClassName="active">Search</Link> {' '}
        <Link to="/results" activeClassName="active">Results</Link> {' '}
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;
