const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}


const userReducer = (state={initialState}, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, fetching: true }
      break
    case "FETCH_USERS_REJECTED":
      return {...state, fetching: false, error: action.payload }
      break
    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        error: false,
        fetched: true,
        users: action.payload.data
      }
      break
    case "CHANGE_NAME":
      state = {...state, name: action.payload } // immutable
      break
    case "CHANGE_AGE":
      state = {...state, age: action.payload }
      break
  }
  return state
}
export default userReducer
