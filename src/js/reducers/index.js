import { combineReducers } from 'redux';
import users from './user-reducer';
import tweets from './tweets-reducer';

export default combineReducers({
  users,
  tweets
});
