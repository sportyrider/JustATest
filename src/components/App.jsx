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
        phone: 'xxx-xxx-xxxx',
      },
    };

    this.fetchSearchCriteria = this.fetchSearchCriteria.bind(this);
    this.getParentState = this.getParentState.bind(this);
  }


  fetchSearchCriteria(searchTerms) {
    this.setState({
      searchTerm: {
        firstName: searchTerms.firstName,
        lastName: searchTerms.lastName,
        email: searchTerms.email,
        phone: searchTerms.phone,
      },
    });
  }

  getParentState() {
    return this.state.searchTerm;
  }

  render() {
    return (
      <div>
        <Router history={hashHistory} >
          <Route path="/" component={NavBar}>
            <Route path="results" component={Results} getParentState={this.getParentState} />
            <Route path="search" component={Search} search={this.fetchSearchCriteria} getParentState={this.getParentState} />
         </Route>
        </Router>
      </div>
    );
  }
}

export default App;
