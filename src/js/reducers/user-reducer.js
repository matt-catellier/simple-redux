const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  users: []
}

const userReducer = (state={initialState}, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING":
      state = {...state, fetching: true }
      break
    case "FETCH_USERS_REJECTED":
      state = {...state, fetching: false, error: action.payload }
      break
    case "FETCH_USERS_FULFILLED":
      state = {
        ...state,
        fetching: false,
        error: false,
        fetched: true,
        users: action.payload.data
      }
      break
  }
  return state
}
export default userReducer
