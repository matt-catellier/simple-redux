const tweetsReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      state = {...state, tweets: action.payload }; // immutable
      break;
  }
 return state;
}

export default tweetsReducer;
