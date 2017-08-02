import axios from 'axios';


const ROOT_URL = 'http://localhost:3090';


export function loginUser({ email, password }) {
  return function (dispatch) {
    // submit email/password to server
    axios.post(`${ROOT_URL}/login`, { email: email, password: password })
    // if request is good, update state
    // save JWT token
    // redirect to route '/feature'

    // if request is bad
    // - show an error to the user
  }
}