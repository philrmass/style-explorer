import { SET_SOURCE } from '../constants/actionTypes';

export const defaultState = '';

function currentSource(state = '', action) {
  switch(action.type) {
    case SET_SOURCE:
      return action.url;
    default:
      return state;
  }
}

export default currentSource;
