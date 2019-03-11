import { ADD_SOURCE } from '../constants/actionTypes';

export function setColorHex(hex) {
  return {
    type: ADD_SOURCE,
    hex
  };
}
