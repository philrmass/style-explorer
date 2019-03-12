import { SET_COLOR_HEX } from '../constants/actionTypes';
import Color from '../color';

export const defaultState = Color.hexToColor('808080');

function currentColor(state = defaultState, action) {
  switch(action.type) {
    case SET_COLOR_HEX:
      return Color.hexToColor(action.hex);
    default:
      return state;
  }
}

export default currentColor;
