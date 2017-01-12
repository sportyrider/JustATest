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
    	<div> <Link to="/">Home</Link> <Link to="/search">Search</Link> <Link to="/results">Results</Link> </div>
    	{this.props.children}
        </div>
    );
  }
}

export default NavBar;