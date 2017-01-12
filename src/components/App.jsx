import React from 'react';
import { hashHistory, Router, Route } from 'react-router';
import NavBar from './NavBar';
import Results from './Results';
import Search from './Search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }
    };

    this.fetchSearchCriteria = this.fetchSearchCriteria.bind(this);
  }


  fetchSearchCriteria(searchTerms) {
    this.setState({
      searchTerm: {
        firstName: searchTerms.firstName,
        lastName: searchTerms.lastName,
        email: searchTerms.email,
        phone: searchTerms.phone
      }
    });
  }

  render() {
    
    let routes = (
      <Route path="/" component={NavBar}>
        <Route path="results" component={Results} />
        <Route path="search" component={Search} searchTerm={this.state.searchTerm} search={this.fetchSearchCriteria} />
      </Route>
    );

    return (
      <div>
        First: {this.state.searchTerm.firstName} Last: {this.state.searchTerm.lastName}
        <Router history={hashHistory} createElement={this.createElement}>
          {routes}
        </Router>
      </div>
    );
  }
}

export default App;
