import React from 'react';
import { Router, Route } from 'react-router';

import NavBar from './NavBar';
import Results from './Results';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: 'Nav !!!',
    });
  }

  render() {
    return (
    	<div>

   <Router>
      <Route path="/" component={NavBar}>
      <Route path="results" component={Results} />
      <Route path="search" component={Search} />
      </Route>
   </Router>
   </div>
    );
  }
}

export default App;
