import store from './store';
import axios from "axios";

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
}); // async?

// WITH TRUCK
// store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_USERS_START"}) // syn process
//   axios.get("http://rest.learncode.academy/api/wstern/users") // dynamic, can post to it too
//     .then((res) => {
//       dispatch({type: "RECIEVED_USERS", payload: res.data })
//     })
//     .catch((err) => {
//       dispatch({type: "FETCH_USERS_ERROR", payload: err })
//     })
// }); // async?
