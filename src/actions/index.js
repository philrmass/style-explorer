import * as types from '../constants/actionTypes';
import Color from '../color';

export function setColorHex(hex) {
  return {
    type: types.SET_COLOR,
    color: Color.hexToColor(hex)
  };
}

export function addSource(name, url, imageData) {
  return {
    type: types.ADD_SOURCE,
    id: url,
    source: {
      name,
      url
    }
  };
}

export function setSource(url) {
  return {
    type: types.SET_SOURCE,
    url
  };
}

export function setCursorPosition(x, y) {
  return {
    type: types.SET_CURSOR_POSITION,
    cursorX: x,
    cursorY: y
  };
}

export function setFullSize(width, height) {
  return {
    type: types.SET_FULL_SIZE,
    width,
    height
  };
}

export function setDisplaySize(width, height) {
  return {
    type: types.SET_DISPLAY_SIZE,
    width,
    height
  };
}
