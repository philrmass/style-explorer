import * as types from '../constants/actionTypes';

export function setColorHex(hex) {
  return {
    type: types.SET_COLOR_HEX,
    hex
  };
}

export function setColorRgb(red, green, blue) {
  return {
    type: types.SET_COLOR_RGB,
    red,
    green,
    blue
  };
}

export function setColorHsl(hue, sat, light) {
  return {
    type: types.SET_COLOR_HSL,
    hue,
    sat,
    light
  };
}

export function addSource(name, url, imageData) {
  return {
    type: types.ADD_SOURCE,
    id: url,
    source: {
      name,
      url,
      length: imageData.length
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
