// ChallengeCreate.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewChallenge } from '../redux/challengeActions'; // Corrected import path

class ChallengeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      // Other form fields
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Use the correct action name: addNewChallenge
    this.props.addNewChallenge(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Form fields for creating a challenge */}
        <button type="submit">Create Challenge</button>
      </form>
    );
  }
}

export default connect(null, { addNewChallenge })(ChallengeCreate); // Corrected action name
