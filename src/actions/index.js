import axios from 'axios';
import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function loginUser ({ email, password, history }) {
  return function (dispatch) {
    // submit email/password to server
    axios.post(`${ROOT_URL}/login`, { email: email, password: password })
    .then(
      (response) => {
      // if request is good, update state
      dispatch({ type: AUTH_USER });

      // save JWT token
      localStorage.setItem('token', response.data.token);
      
      // redirect to route '/feature'
      history.push('/feature');
    })
    .catch(
      (err) => {
      // if request is bad
      dispatch(authErr('Incorrect email or password.'));
    });

    // - show an error to the user
  }
};

export function authErr(errMessage) {
  return {
    type: AUTH_ERR,
    payload: errMessage
  };
};

export function logoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function signupUser({ email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/api/v1/users`, { email: email, password: password })
    .then(function (response) {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/feature');
    })
    .catch(function (err) {
      dispatch(authErr(err.response.data.message))
    });

  }
}