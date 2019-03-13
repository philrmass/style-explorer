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

export function addSource(name, url) {
  return {
    type: types.ADD_SOURCE,
    name,
    url,
  };
}

export function setSourceColors(url, colors) {
  return {
    type: types.SET_SOURCE_COLORS,
    url,
    colors
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

export function toggleColorPicker() {
  return {
    type: types.TOGGLE_COLOR_PICKER
  };
}

export function toggleSource() {
  return {
    type: types.TOGGLE_SOURCE
  };
}

export function toggleSources() {
  return {
    type: types.TOGGLE_SOURCES
  };
}

export function toggleGraph() {
  return {
    type: types.TOGGLE_GRAPH
  };
}
