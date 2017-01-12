import React from 'react';
import { hashHistory } from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.init = this.init.bind(this);
  }


  componentDidMount() {
    this.init();
  }

  init() {
    this.setState({
      firstName: this.props.route.searchTerm.firstName,
      lastName: this.props.route.searchTerm.lastName,
      email: this.props.route.searchTerm.email,
      phone: this.props.route.searchTerm.phone
    });
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.phone);
    }
  }

  handleSubmit(event) {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phone);

    let criteria = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.route.search(criteria);

    hashHistory.push("/results");
  }



  render() {
    return (
      <div style={Search.styles.div}>
        <h3>Search Form</h3>
        <div>
          <span>
            <label style={Search.styles.label}>
              First Name:
             <input type="text" name="name" defaultValue={this.props.route.searchTerm.firstName}
                style={Search.styles.input}
                onChange={this.handleFirstNameChange}
                onKeyPress={this.handleKeyPress}
                />
            </label>
          </span>
          <span>
            <label style={Search.styles.label}>
              Last Name:
        <input type="text" name="name" defaultValue={this.props.route.searchTerm.lastName}
                style={Search.styles.input}
                onChange={this.handleLastNameChange}
                onKeyPress={this.handleKeyPress}
                />
            </label>
          </span>
        </div>
        <div>
          <span>
            <label style={Search.styles.label}>
              Email:
             <input type="text" name="name" defaultValue={this.props.route.searchTerm.email}
                style={Search.styles.input}
                onChange={this.handleEmailChange}
                onKeyPress={this.handleKeyPress}
                />
            </label>
          </span>
        </div>
        <div>
          <span>
            <label style={Search.styles.label}>
              Phone:
             <input type="text" name="name" defaultValue={this.props.route.searchTerm.phone}
                style={Search.styles.input}
                onChange={this.handlePhoneChange}
                onKeyPress={this.handleKeyPress}
                />
            </label>
          </span>
        </div>
        <div>
          <button
            style={Search.styles.button}
            onClick={this.handleSubmit}>
            Search
          </button>
        </div>
      </div>
    );
  }
}


//Search.propTypes = {
 // route: React.PropTypes.object.isRequired,
// search: React.PropTypes.func.isRequired
//};

Search.styles = {
  div: {
    margin: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    width: '60%',
    marginTop: 10,
    marginLeft: 10,
  },
  label: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  button: {
    marginTop: 25,
    width: '25%',
  },
};

export default Search;
