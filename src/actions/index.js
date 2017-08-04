import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER,
  AUTH_ERR
} from './types';

const ROOT_URL = 'http://localhost:3090';


export function loginUser ({ email, password }) {
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
      browserHistory.push('/feature');
    })
    .catch(
      (err) => {
      // if request is bad
      dispatch(authErr('Incorrect email or password.'));
    });

    // - show an error to the user
  }
};

export function authError(errMessage) {

}