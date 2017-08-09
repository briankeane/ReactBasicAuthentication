import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERR
} from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, errMessage: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, errMessage: '', authenticated: false };
    case AUTH_ERR:
      return { ...state, errMessage: action.payload };
  }
  return state;
}