// challengeActions.js
import { createChallenge } from '../services/api';
import { FETCH_CHALLENGES, CREATE_CHALLENGE } from './challengeActionTypes'; // Correct the path based on your project structure
import { getChallenges } from '../services/api';

export function fetchChallenges() {
  return (dispatch) => {
    getChallenges()
      .then((response) => {
        dispatch({ type: FETCH_CHALLENGES, payload: response.data });
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching challenges:', error);
      });
  };
}

export function addNewChallenge(newChallenge) {
  return (dispatch) => {
    createChallenge(newChallenge)
      .then((response) => {
        dispatch({ type: CREATE_CHALLENGE, payload: response.data });
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating challenge:', error);
      });
  };
}
