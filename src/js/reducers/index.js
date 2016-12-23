import { combineReducers } from 'redux';
import user from './user-reducer'; 
import tweet from './tweets-reducer';

export default combineReducers({
  user,
  tweet
});
