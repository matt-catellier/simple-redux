import { createStore  } from 'redux';
import reducers from './reducers/';
import middlewares from './middlewares/';
import { fetchUsers } from './actions/userActions';
import { fetchTweets } from './actions/tweetActions';

const store = createStore(reducers, middlewares);

store.dispatch(fetchUsers()); // async
store.dispatch(fetchTweets()); // async
