import * as types from '../constants/actionTypes';

export function setColorHex(hex) {
  return {
    type: types.SET_COLOR_HEX,
    hex
  };
}

export function addSource() {
  return {
    type: types.ADD_SOURCE,
  };
}
