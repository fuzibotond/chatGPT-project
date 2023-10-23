// challengeReducer.js
import { FETCH_CHALLENGES } from './challengeActionTypes'; // Adjust the path

const initialState = {
  challenges: [], // Initialize challenges as an empty array
};

export default function challengeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHALLENGES:
      return {
        ...state,
        challenges: action.payload,
      };
    default:
      return state;
  }
}
