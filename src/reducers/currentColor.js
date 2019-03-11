import { SET_COLOR } from '../constants/actionTypes';
import Color from '../color';

export const defaultState = Color.hexToColor('808080');

function currentColor(state = defaultState, action) {
  switch(action.type) {
    case SET_COLOR:
      return action.color;
    default:
      return state;
  }
}

export default currentColor;
