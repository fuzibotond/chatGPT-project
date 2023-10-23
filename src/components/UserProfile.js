// UserProfile.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfileData } from '../redux/userActions'; // Adjust the path

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUserProfileData();
  }

  render() {
    const { userData } = this.props;

    return (
      <div>
        {/* Display user profile data */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { fetchUserProfileData })(UserProfile);
