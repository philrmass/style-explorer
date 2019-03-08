import { SET_COLOR_HEX } from './actionTypes';

function currentColor(state = {}, action) {
  console.log('currentColor', state, action);
  switch(action.type) {
    case SET_COLOR_HEX:
      console.log('GOT IT!!!', action.hex, SET_COLOR_HEX);
      return state;
    default:
      return state;
  }
}

export default currentColor;
