const payloadLowerCase = (state) => (next) => (action) => {
  if(typeof action.payload === "string") {
    const lowerCase = action.payload.toLowerCase();
    action = { ...action, payload:  lowerCase } // create copy of orignal
  }
  next(action);
}

export default payloadLowerCase;
