import { combineReducers } from 'redux';
import users from './reducers/user-reducer';
import tweets from './reducers/tweets-reducer';

export default combineReducers({
  users,
  tweets
});
