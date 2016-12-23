import { createStore  } from 'redux';
import reducers from './reducers/';
import middlewares from './middlewares/';
import * as user from './actions/userActions';
import { fetchTweets } from './actions/tweetActions';

const store = createStore(reducers, middlewares);

store.dispatch(user.fetchUsers()); // async
store.dispatch(fetchTweets()); // async
