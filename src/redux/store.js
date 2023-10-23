import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import challengeReducer from './challengeReducer';

const store = createStore(challengeReducer, applyMiddleware(thunk));

export default store;

