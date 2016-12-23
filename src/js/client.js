import { createStore  } from 'redux';
import reducers from './reducers/';
import middlewares from './middleware/';
import axios from "axios";

const store = createStore(reducers, middlewares);

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
}); // async?
