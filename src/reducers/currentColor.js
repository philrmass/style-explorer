import { SET_COLOR_HEX, SET_COLOR_RGB, SET_COLOR_HSL } from '../constants/actionTypes';
import Color from '../color';

export const defaultState = Color.hexToColor('808080');

function currentColor(state = defaultState, action) {
  let rgb, hsl;
  switch(action.type) {
    case SET_COLOR_HEX:
      return Color.hexToColor(action.hex);
    case SET_COLOR_RGB:
      rgb = {
        red: action.red,
        green: action.green,
        blue: action.blue
      };
      return Color.rgbToColor(rgb);
    case SET_COLOR_HSL:
      hsl = {
        hue: action.hue,
        sat: action.sat,
        light: action.light
      };
      return Color.hslToColor(hsl);
    default:
      return state;
  }
}

export default currentColor;
