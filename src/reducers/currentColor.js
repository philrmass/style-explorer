import { SET_COLOR_HEX } from '../constants/actionTypes';
import Color from '../color';

function currentColor(state = {}, action) {
  switch(action.type) {
    case SET_COLOR_HEX:
      return ({
        hex: action.hex,
        ...Color.hexToColor(action.hex)
      });
    default:
      return state;
  }
}

export default currentColor;
