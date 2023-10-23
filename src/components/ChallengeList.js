import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChallenges, addNewChallenge } from '../redux/challengeActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateChallengeModal from './CreateChallengeModal'; // Import the new component


class ChallengeList extends Component {
  state = {
    isCreating: false,
    newChallenge: {
      name: '',
      description: '',
      creator: 101, // Default to user ID
      startDate: '',
      endDate: '',
    },
  };

  componentDidMount() {
    this.props.fetchChallenges();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newChallenge: {
        ...prevState.newChallenge,
        [name]: value,
      },
    }));
  };

  handleCreateChallenge = () => {
    this.props.addNewChallenge(this.state.newChallenge);
    this.setState({
      isCreating: false,
      newChallenge: {
        name: '',
        description: '',
        creator: 101,
        startDate: '',
        endDate: '',
      },
    });
  };

  render() {
    const { challenges } = this.props;
    const { isCreating, newChallenge } = this.state;

    return (
      <div>
        <Grid container spacing={2}>
          {challenges.map((challenge) => (
            <Grid item key={challenge.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <h3>{challenge.name}</h3>
                  <p>{challenge.description}</p>
                  <p>Start Date: {challenge.startDate}</p>
                  <p>End Date: {challenge.endDate}</p>
                  <p>Creator: {challenge.creator.username}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <CreateChallengeModal
            open={isCreating}
            onClose={() => this.setState({ isCreating: false })}
            newChallenge={newChallenge}
            handleInputChange={this.handleInputChange}
            handleCreateChallenge={this.handleCreateChallenge}
            />

        <Fab
          color="primary"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
          onClick={() => this.setState({ isCreating: true })}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    challenges: state.challenges,
  };
};

export default connect(mapStateToProps, { fetchChallenges, addNewChallenge })(ChallengeList);
