import { SET_COLOR_HEX } from '../constants/actionTypes';
import Color from '../color';

export const defaultHex = '808080';
export const defaultState = {
  hex: defaultHex,
  ...Color.hexToColor(defaultHex)
};

function currentColor(state = defaultState, action) {
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
