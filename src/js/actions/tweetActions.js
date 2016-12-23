import axios from "axios";

export function fetchTweets() {
  return {
    type: "FETCH_TWEETS",
    payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
  }
}
