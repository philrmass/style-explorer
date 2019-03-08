import { SET_COLOR_HEX } from '../../src/constants/actionTypes';
import currentColor from '../../src/reducers/currentColor';

describe('currentColor', () => {
  const colorHex = '6b2097';
  const color = { 
    hex: colorHex,
    red: 107,
    green: 32,
    blue: 151,
    hue: 277.8,
    sat: 65.0,
    light: 35.9
  };

  test('Should return default state for undefined state', () => {
    expect(currentColor(undefined, { type: null })).toEqual({});
  });

  test('Should return same state for undefined action', () => {
    expect(currentColor({}, { type: null })).toEqual({});
  });

  test('Should set color from hex value', () => {
    expect(currentColor({}, { type: SET_COLOR_HEX, hex: colorHex })).toEqual(color);
  });
});
