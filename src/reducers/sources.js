import { ADD_SOURCE } from '../constants/actionTypes';
//import Color from '../color';

function sources(state = {}, action) {
  switch(action.type) {
    case ADD_SOURCE:
      return state;
    default:
      return state;
  }
}

export default sources;
