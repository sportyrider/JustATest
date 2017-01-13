import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: 'Results !!!',
    });
  }

  render() {
    let criteria = this.props.route.getParentState();

    return (
      <div>
      <h2>Results:</h2>
      {criteria.firstName} {' - '}
      {criteria.lastName} {' - '}
      {criteria.email} {' - '}
      {criteria.phone}

      </div>
    );
  }
}

export default Results;
