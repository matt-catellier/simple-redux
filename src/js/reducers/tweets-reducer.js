const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  tweets: [],
}

const tweetsReducer = (state={initialState}, action) => {
  switch(action.type) {
    case "FETCH_TWEETS_PENDING":
      return {...state, fetching: true }
      break
    case "FETCH_TWEETS_REJECTED":
      return {...state, fetching: false, error: action.payload }
      break
    case "FETCH_TWEETS_FULFILLED":
      return {
        ...state,
        fetching: false,
        error: false,
        fetched: true,
        tweets: action.payload.data
      }
      break
  }
  return state
}

export default tweetsReducer;
