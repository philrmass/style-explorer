import * as types from '../constants/actionTypes';
import Color from '../color';

export function setColorHex(hex) {
  return {
    type: types.SET_COLOR,
    color: Color.hexToColor(hex)
  };
}

export function addSource() {
  return {
    type: types.ADD_SOURCE,
  };
}
