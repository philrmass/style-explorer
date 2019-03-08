import { SET_COLOR_HEX } from '../constants/actionTypes';

function currentColor(state = {}, action) {
  console.log('currentColor', state, action);
  switch(action.type) {
    case SET_COLOR_HEX:
      return ({
        ...state,
        hex: action.hex
      });
    default:
      return state;
  }
}

export default currentColor;
