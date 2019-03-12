import * as types from '../constants/actionTypes';
import Color from '../color';

export function setColorHex(hex) {
  return {
    type: types.SET_COLOR,
    color: Color.hexToColor(hex)
  };
}

export function addSource(name, url, imageData) {
  console.log('add', name, '\n', url);
  console.log('data', imageData.width, 'x', imageData.height, imageData.data.length);
  //??? add timeAdded
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

export function setMagnifierPosition(x, y) {
  return {
    type: types.SET_MAGNIFIER_POSITION,
    x,
    y
  };
}

export function setFullSize(width, height) {
  return {
    type: types.SET_FULL_SIZE,
    width,
    height
  };
}
